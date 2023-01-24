import styles from "./rpipage.module.css";
import Link from 'next/link';
import { useState, useEffect } from "react";

const rpipage = () => {
//       const [data, setData] = useState(null)
//       const [isLoading, setLoading] = useState(false)

//       useEffect(() => {
//             async function getPageData(){
//                   const response = await fetch('http://localhost:3001/rpi');
//                   const res = await response.json();
//                   setData(res.data);
//             }
//             getPageData();
//       },[])

//       if (isLoading) return <p>loading..</p>
//       if (!data) return <p>no profile</p>

//       const image_set = 'data:image/png;base64,';
//       const current_date = new Date();
//       const date = `${current_date.getDate()}/${current_date.getMonth()+1}/${current_date.getFullYear()}`

//     return (
//       <div className={styles.container}>
//             <div className={styles.navbar}>
//                   <div className={styles.logo}>
//                         <p><Link href="/">LabRats</Link></p>
//                   </div>
//                   <div className={styles.items}>
//                         <ul>
//                               <li><Link href="/SignIn">Logout</Link></li>
//                         </ul>
//                   </div>
//             </div>
//             <div className={styles.title}>
//                   <h1>Dashboard</h1>
//                   <h2>Motion Detection</h2>
//             </div>
//             <div className={styles.pictures}>
//                   <div  className={styles.pics}>
//                         <p>{date}</p>
//                         <img src={'data:image/png;base64, ${data.data}'}></img>
//                   </div>
//                   <div  className={styles.pics}>
//                         sd
//                   </div>
//                   <div  className={styles.pics}>
//                         sd
//                   </div>
//             </div>
//       </div>
//     );
      const [data, setData] = useState(null);
       const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function getPageData(){
        const response = await fetch('http://localhost:3001/rpi');
        const res = await response.json();
        setData(res.data);
    }
    getPageData();
    // setLoading(true)
    // fetch('http://192.168.18.5:3080/displaycam')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setData(data)
    //     setLoading(false)
    //   })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  const image_set = 'data:photo/png;base64,';
  const current_date = new Date();
  const date = `${current_date.getDate()}/${current_date.getMonth()+1}/${current_date.getFullYear()}`

    return (
        
        <div className={styles.background}>
            
            <div className={styles.navigation}>
            <Link href="/"><button className={styles.logout_button}>LOG OUT</button></Link>
                <label className={styles.date_today}>Date Today:{date}</label>
            </div>
            <div className={styles.container}>
                {data ? data.map(datas =>(
                <div className={styles.image_container}>
                    <div className={styles.main_image_container}>
                        <img className={styles.pics} src={image_set + Buffer.from(datas.photo).toString('utf-8')}/>
                        <br/>
                        <label className={styles.dateTime}>{datas.datetime}</label>
                    </div>
                    <div className={styles.sub_images}>
                        <div>
                            <img className={styles.image1} src="/images/no-image.png"/>
                            <br/>
                            <label className={styles.dateTime}>Date and Time Recorded: This is Time</label>
                        </div>
                        <div >
                            <img className={styles.image2} src="/images/no-image.png"/>
                            <br/>
                            <label className={styles.dateTime}>Date and Time Recorded: This is Time</label>
                        </div>
                        <div>
                            <img className={styles.image2} src="/images/no-image.png"/>
                            <br/>
                            <label className={styles.dateTime}>Date and Time Recorded: This is Time</label>
                        </div>
                    </div>
                </div>
                )) :(<p> Loading</p>)}
            </div>
            
        </div>
  
    );
  };
  
  export default rpipage;