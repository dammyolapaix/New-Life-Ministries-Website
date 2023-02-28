import Layout from '@/components/Layout'
import ContactUs from '@/components/ContactUs'

const ContactPage = () => {
  return (
    <Layout>
      <header className="bg-gradient-to-r from-primary to-tertiary">
        <div className="container h-80 flex justify-center items-center">
          <h1 className="text-white font-bold text-4xl">Contact Us</h1>
        </div>
      </header>

      <section className="py-10 md:py-20">
        <ContactUs />
      </section>
    </Layout>
  )
}

export default ContactPage
