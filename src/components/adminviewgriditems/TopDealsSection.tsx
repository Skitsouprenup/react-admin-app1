import '@/styles/adminviewgriditems/topdealsitem.css'
import { topDealsData } from '@/data/hotdeals'

const HotDealsSection = () => {
  return (
    <div>
      <h2>Top Users</h2>
      <div className='top-deals-content'>
        {
          topDealsData.map(item => 
            <div className='top-deals-item' key={item.id}>
              <div className='item-profile'>

                <div className='rounded-thumbnail'>
                  <img 
                    src={
                      item.image ? 
                      item.image :
                      'https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710806400&semt=ais'
                    }
                    width={30}
                    height={30}
                  />
                </div>
                <div className='item-info'>
                  <p>{item.username}</p>
                  <p
                    className='item-info-email'
                  >
                    {item.email}
                  </p>
                </div>

              </div>

              <div className='item-amount'>
                <p>{item.amount}</p>
              </div>

            </div>
          )
        }
      </div>
    </div>
  )
}

export default HotDealsSection