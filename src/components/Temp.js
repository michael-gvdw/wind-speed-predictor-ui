

import ContactInfoComponent from './common/ContactInfoComponent'

const Temp = () => {
    return (
        <section className={`row`}>
                <div className={`col-wide`}>
                    <ContactInfoComponent />
                </div>

                <div className={`col`}>
                    <ContactInfoComponent />
                </div>
        </section>
    )
}

export default Temp