import s from "../../profile.module.scss"
import { useState } from "react"
import { AddComponent } from "../../../../../modal/AddComponent"
import { Modal } from "../../../../../modal/Modal"
import { useTypedSelector } from "../../../../../../common/hooks/useTypedSelector"
import { Item } from "./Item"
import { FormEducation } from "../../../../../modal/forms/FormEducation"

export const EducationComponent = () => {
    const data = useTypedSelector(state=>state.user.user?.education)
    
    // console.log(data);
    
    const [isModalOpen, setModalOpen] = useState<boolean>(false)
    const handleCloseModal = () => setModalOpen(false)
    const handleOpenModal = () => setModalOpen(true)

    return (
        <div className={s.userData}>
            <div className={s.title}>Education</div>
            <div className={s.itemList}>
                {(data?.length>0) ? data?.map((el, i)=>
                // <div key={i}>
                //     <hr/>
                //     <div className={s.name}>{el?.univercity}</div>
                //     <div className={s.subtitle}> {el?.direction}</div>
                //     <div className={s.time} >{el?.period}</div>
                // </div>) 
                <Item data={el} key={i}/>):
                <>
                <hr/>
                <div>Data has been empty yet</div>
                <br/>
                </>}
                <AddComponent onOpen={handleOpenModal} />
                {isModalOpen && (<Modal onClose={handleCloseModal} children={<FormEducation onClose={handleCloseModal}/>} />)}
                
                
            </div>
        </div>
    )
}