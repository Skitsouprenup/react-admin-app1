import '@/styles/pages/userpage.css'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import { userPageActivities, userStats } from '@/data/userpagedata'

import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { userDataRows } from '@/data/usersdata'

const UserPage = () => {
  const params = useParams();
  const userId = Number(params?.userId);

  const [userInfo] = useState(userDataRows.find((item) => userId === item.id))

  return (
    <div className='user-page-contaner'>

      <div
        className='user-info-section'
      >
        <div
          className='profile-section'
        >

          <div
            className='profile-header'
          >
            <div className='profile-image'>
              <img  
                alt="avatar"
                width="100%"
                height="100%"
                src={
                  userInfo?.img ? 
                  userInfo.img : 
                  'https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710806400&semt=ais'
                }
              />
            </div>

            <div
              className='profile-header-right-items'
            >
              <h2>{userInfo?.firstName}</h2>
              <div
                className='profile-header-item-edit-btn'
              >
                Edit Profile
              </div>
            </div>
          </div>

          <div
            className='profile-info'
          >
            <div className='profile-info-subject'>
              <h4>Full Name:</h4>
              <h4>Email:</h4>
              <h4>Status:</h4>
            </div>

            <div className='profile-info-subject-value'>
              <p>{userInfo?.firstName + ' ' + userInfo?.lastName}</p>
              <p>email@email.com</p>
              <p>{userInfo?.status ? 'Verified' : 'Not Verified'}</p>
            </div>
          </div>

        </div>

        <div
          className='user-stats-chart'
        >
          <div className='user-stats-chart-container'>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={userStats}
                margin={{
                  top: 5,
                  right: 30,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      <div className='user-activities'>

        <h2>Latest Activities</h2>

        <div className='activities-content'>
          <div className='activities-timeline'></div>

          <div
            className='activities-content-section'
          >
            {
              userPageActivities.map((item, index) => (
                <div className='activity-content' key={index}>
                  <div className='activity-timeline-circle'></div>
                  <h3>{item?.title}</h3>
                  <p>{item?.desc}</p>
                  <p className='activity-creation-date'>
                    {item?.timeDuration}
                  </p>
                </div>
              ))
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default UserPage