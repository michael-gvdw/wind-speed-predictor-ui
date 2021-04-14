

import ContactInfoComponent from './common/ContactInfoComponent'

const Temp = () => {
    return (
        <section className={`row`}>
                <div className={`col-wide center-div`}>
            
                        <ContactInfoComponent />
                  
                </div>

                <div className={`col center-div`}>
                    <ContactInfoComponent />
                </div>
        </section>
    )
}

export default Temp