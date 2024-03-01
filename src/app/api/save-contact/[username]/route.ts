import { db } from '@/utils/db'
import { redirect } from 'next/navigation'
import vCardsJS from 'vcards-js'

export async function GET(_request: Request, { params }: { params: { username: string } }) {
  if (!params.username) return redirect('https://durrrian.com')

  const user = await db.contactCard.findUnique({ where: { username: params.username } })

  if (!user) return redirect('https://durrrian.com')

  const vCard = vCardsJS()

  /**
   * can also support 2.1 and 4.0, certain versions only support certain fields
   */
  vCard.version = '3.0'

  vCard.logo.attachFromUrl('https://utfs.io/f/b6454e7b-c0f0-41d2-861a-ea01844fbb87-ge3if.png', 'PNG')

  vCard.organization = 'Durrrian'

  vCard.url = 'https://durrrian.com'

  //set address information
  vCard.workAddress.label = 'Work Address'
  vCard.workAddress.street = 'Bellezza BSA 1st Floor Unit 106\nJl. Letjen Soepeno'
  vCard.workAddress.city = 'Jakarta Selatan'
  vCard.workAddress.stateProvince = 'DKI Jakarta'
  vCard.workAddress.postalCode = '12210'
  vCard.workAddress.countryRegion = 'Indonesia'

  //set basic properties shown before
  vCard.firstName = user.firstName
  if (user.middleName) vCard.middleName = user.middleName
  vCard.lastName = user.lastName
  if (user.photoUrl) vCard.photo.attachFromUrl(user.photoUrl, 'PNG')
  vCard.workPhone = user.workPhone
  vCard.title = user.title
  if (user.nickname) vCard.nickname = user.nickname
  vCard.gender = user.gender
  vCard.workEmail = user.workEmail

  return new Response(vCard.getFormattedString(), {
    status: 200,
    headers: {
      'Content-Type': `text/vcard; name="${user.username}.vcf"`,
      'Content-Disposition': `inline; filename="${user.username}.vcf"`,
    },
  })
}
