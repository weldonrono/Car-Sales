import { services } from '../constants'
import Card from '../components/Card'

const Services = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
      {services.map((sevice) =>(
        <Card key={sevice.label} {...sevice}/>
      ))}
      
      

    </section>
  )
}

export default Services