import React,{useState} from 'react'
import style from "./Home.module.css";
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {Swiper,SwiperSlide}from "swiper/react";
import { Autoplay,Pagination,Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Home = () => {
    const location=useLocation()
   const BackData=[{image:"1"},{image:"2"},{image:"2"},{image:"2"},{image:"2"}]
    const imageData=[{image:`GOLD-LOGO.png`,title:"ХӨРӨНГӨ ОРУУЛАЛТ"},{image:"logo-blue(1).png",title:"БАРИЛГА ТОНОГ ТӨХӨӨРӨМЖ ХУДАЛДАА"},{image:"logo-orenga.png",title:"БАРИЛГА МАТЕРИАЛ ХУДАЛДАА"},{image:"muuun.png",title:"ЗУУЧ ХАУС ГАЗАР ХӨРӨНГӨ"},{image:"logo-hoh.png",title:"ЗУУЧ ХАУС ГАЗАР ХӨРӨНГӨ"}]
    const CompanyData=[{image:`GOLD-LOGO.png`,title:"ХӨРӨНГӨ ОРУУЛАЛТ",id:1},{image:"logo-blue(1).png",title:"БАРИЛГА ТОНОГ ТӨХӨӨРӨМЖ ХУДАЛДАА",id:1},{image:"logo-orenga.png",title:"БАРИЛГА МАТЕРИАЛ ХУДАЛДАА",id:1},{image:"muuun.png",title:"ЗУУЧ ХАУС ГАЗАР ХӨРӨНГӨ",id:1},{image:"logo-hoh.png",title:"ЗУУЧ ХАУС ГАЗАР ХӨРӨНГӨ"},{image:"logo-hoh.png",title:"ЗУУЧ ХАУС ГАЗАР ХӨРӨНГӨ"},{image:"logo-hoh.png",title:"ЗУУЧ ХАУС ГАЗАР ХӨРӨНГӨ"},{image:"logo-hoh.png",title:"ЗУУЧ ХАУС ГАЗАР ХӨРӨНГӨ"}]
    const navigate=useNavigate();  
    // <Link to={`/home/buteegdehuun/${data.id}`}>Дэлгэрэнгүй</Link> 
    const handleClick=(id,pathname)=>{
        console.log(id)
        console.log(location.pathname)
        navigate(`/home/buteegdehuun/${id}`)


    }
    return (
    <div className={style.Container}>
    <div className={style.TextContainer}>
    <div className={style.Text}><h1>ХАМТЫН ХҮЧ</h1></div>
      <div className={style.Text}><h1>АМЖИЛТЫН ТҮЛХҮҮР</h1></div>
      <div className={style.Text}><hr style={{background: 'yellow',color: 'yellow',borderColor: 'yellow',borderRadius:"5px", height: '4px', width:"30%",marginTop:"10px"}}/></div>
      <div className={style.SpanContainer}>
      <span className={style.SpanText}>Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore e Uplore magna. Quis ipsum suspendklfjslfkdsljfklsdjgdfjhgkjhkdisse ultrices gravida</span>
      </div>
      
      </div>
      <div className={style.LogoContainer}>
      {
        imageData && imageData.map((data)=>{
            return(
                <div className={style.Logo}><img src={ require(`../../img/${data.image}`) } style={{height:"20",width:"50"}} alt=""/>
                <div className={style.ImageText}><span>{data.title}</span></div>
                
                </div>
            )
        })
    }
      
      </div>

  
    <div className={style.ImContainer}>

        {
            
          CompanyData &&  CompanyData.map((data)=>{
            return (
                <div className={style.SectionContainer}>
                    <div className={style.SectionImageContainer}>
                        <div className={style.SectionImage}></div>
                    
                    </div>
                    <div className={style.SectionIconAndText}>
                        <div className={style.SectionIconAndbtn}>
                        <div className={style.SectionImageIcon}>
                        <img src={require(`../../img/${data.image}`)} style={{display:"flex",alignItems:"center",width:"100%",height:"100%"}}/>
                        </div>
                        
                        <div className={style.SectionTitle}>
                        <div className={style.Text}><span>{data.title}</span></div>
                        <div className={style.Btn}> <button onClick={()=>{handleClick(data.id)}}>Дэлгэрэнгүй</button></div>
                        
                     
                       
                        </div>
                        
                        </div>
                    </div>
                </div>
            )
          
        })}
    
        

        
    <div >

    
    </div>
    
    </div>

          </div>
  )
}

export default Home
