import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import Error from 'next/error'

export default NextAuth({
  secret: process.env.JWT_SECRET,
  session: {
    jwt: true
  },
  callbacks: {
    async jwt ({ token, user, account }) {
      // Persist the OAuth access_token to the token right after signin

      //I must send here the token type and the id_token to the backend

      if (account) {
        console.log(account)
        console.log(account.id_token, account.token_type)
        console.log('token ~~~~~~~~~~~~~~~~~~~~~', token)
        token = {
          email: user.email,
          name: user.name
          //     isDonator: user.isDonator,
          //     id: user.id,
          //     fullname: user.fullname,
          //     image: user.image,
          //     phoneNum: user.phoneNum,
          //     isValid: user.isValid
        }
      }
      return token
    },
    async session ({ session, token }) {
      // token?.id ? (session.user.id = token.id) : ''
      token?.email ? (session.user.email = token.email) : ''
      token?.name ? (session.user.name = token.name) : ''

      // token?.isDonator ? (session.user.isDonator = token.isDonator) : ''
      // token?.fullname ? (session.user.fullname = token.fullname) : ''
      // token?.image ? (session.user.image = token.image) : ''
      // token?.phoneNum ? (session.user.phoneNum = token.phoneNum) : ''
      // !(token?.isValid)? (session.user.isValid = token.isValid):''
      console.log('session', session)

      return session
    }
  },
  //Specify Provider
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      httpOptions: {
        timeout: 40000
      }
      // async profile (profile, tokens) {
      //   await dbConnect()
      //   console.log(tokens)
      //   const user = await User.findOne({
      //     email: profile.email
      //   })

      //   if (user) {
      //     return {
      //       email: user.email,
      //       isDonator: user.isDonator,
      //       id: user.id,
      //       fullname: user.fullname,
      //       image: user.image,
      //       phoneNum: user.phoneNum,
      //       isValid: user.isValid
      //     }
      //   } else {
      //     console.log(profile)

      //     const NewUser = await User.create({
      //       email: profile.email,
      //       adress: ' ',
      //       isDonator: false,
      //       phoneNum: 11111111,
      //       fullname: profile.name,
      //       password: hashSync(profile.sub),
      //       image: profile.picture,
      //       isValid:false
      //     })
      //     return {
      //       email: NewUser.email,
      //       isDonator: NewUser.isDonator,
      //       id: NewUser.id,
      //       fullname: NewUser.fullname,
      //       image: NewUser.image,
      //       phoneNum: NewUser.phone,
      //       isValid : false,
      //     }
      //   }
      // }
    })
  ],
  pages: {
    signIn: '/auth/signIn'
  }
})
