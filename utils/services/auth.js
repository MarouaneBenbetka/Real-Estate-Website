// export async function getServerSideProps ({ req }) {
//   const session = await getSession({ req })

import { getSession } from "next-auth/react"

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false
//       }
//     }
//   }

//   return {
//     props: { session }
//   }
// }

export async function isLogin (session){

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

}
