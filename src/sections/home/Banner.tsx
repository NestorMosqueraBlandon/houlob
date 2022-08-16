import { NextPage } from 'next';
import React from 'react';
import styles from '../../styles/Home.module.css';

const Banner: NextPage = () => {

   return (
      <section className={`${styles.home} section`}>
         <div className={`${styles.home_container} container grid`}>
            <div className={styles.home_data}>
               <h1 className={styles.home_title}>
                  Descubra <br /> La Propiedad <br /> Más Adecuada{' '}
               </h1>
               <p className={styles.home_description}>
                  Encuentre una variedad de propiedades que se adapten a usted
                  muy fácilmente, olvídese de todas las dificultades para
                  encontrar una residencia para usted
               </p>

               <form action="" className={styles.home_search}>
                <i className='bx bx-map'></i>
                <input type="search" className={styles.home_search_input} placeholder='Buscar por ubicacion' />
                <button>Buscar</button>
               </form>

               <div className={styles.home_value}>
                    <div>
                        <h1 className={styles.home_value_number}>9k <span>+</span></h1>
                        <span className={styles.home_value_description}>
                            Productos Premium
                        </span>
                    </div>
                    <div>
                        <h1 className={styles.home_value_number}>2k <span>+</span></h1>
                        <span className={styles.home_value_description}>
                            Clientes Felices
                        </span>
                    </div>
                    <div>
                        <h1 className={styles.home_value_number}>28k <span>+</span> </h1>
                        <span className={styles.home_value_description}>
                            Reconocimientos
                        </span>
                    </div>
               </div>
            </div>
         </div>
      </section>
   );
};



export default Banner;
