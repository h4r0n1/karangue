import 'bootstrap/dist/css/bootstrap.min.css';
import './Sante.css';
import doctor from '../../images/doctor.jpeg'

function Sante () {
  return(
    <div className=' container-sante'>
      <div className='container-fluid sante justify-content-center pr-2'>
        <h1 className='title'>Sante</h1>
        <p className='para-sante'>Accueil > Sante</p>
      </div>
      <div className='container' >
      <div className=' row section-cards text-center '>
      <div className='col-lg-3'>
      <div className="card ">
      <div className=''>
      <img src= {doctor} className='image'/>
      </div>
   
  <div class="card-body">
    <h5 className="card-title title-card ">Mèdecin Expert</h5>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod

</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </div>

            
  <div className='col-lg-3'>
      <div className="card ">
      <div className=''>
      <img src= {doctor} className='image'/>
      </div>
   
  <div class="card-body">
    <h5 className="card-title title-card ">Diagnostic</h5>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod

</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </div>



  <div className='col-lg-3'>

<div className="card ">
      <div className=''>
      <img src= {doctor} className='image'/>
      </div>
   
  <div class="card-body">
    <h5 className="card-title title-card ">Pathologie</h5>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod

</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>


<div className='col-lg-3'>


<div className="card ">
      <div className=''>
      <img src= {doctor} className='image'/>
      </div>
   
  <div class="card-body">
    <h5 className="card-title title-card ">Soins Dentaires</h5>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod

</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>















      </div>

      <div className=' row section-cards text-center '>
      <div className='col-lg-3'>
      <div className="card ">
      <div className=''>
      <img src= {doctor} className='image'/>
      </div>
   
  <div class="card-body">
    <h5 className="card-title title-card ">Cardiologie</h5>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod

</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
 </div> 

 <div className='col-lg-3'>    
      <div className="card">
      <div className=''>
      <img src= {doctor} className='image'/>
      </div>
   
  <div class="card-body">
    <h5 className="card-title title-card ">Mèdecine</h5>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod

</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>


<div className='col-lg-3'> 
<div className="card ">
      <div className=''>
      <img src= {doctor} className='image'/>
      </div>
   
  <div class="card-body">
    <h5 className="card-title title-card ">Neurologie</h5>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod

</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>


<div className='col-lg-3'> 
<div className="card ">
      <div className=''>
      <img src= {doctor} className='image'/>
      </div>
   
  <div class="card-body">
    <h5 className="card-title title-card ">Ambulance</h5>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod

</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

</div>














      </div>













</div>



    </div>

  )
}
export default Sante;