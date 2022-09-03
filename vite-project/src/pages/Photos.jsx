import React, {useContext} from "react"
import Image from "../components/Image"
import { Context } from "../context/useContext"
import {getClass} from "../utils/index"

export default function Photos() {
    const {allPhotos} = useContext(Context);
    const imagesDisplay = allPhotos.map((photo, index) => (
        <Image key={photo.id} img={photo} className={getClass(index)}/>
    ))

    return (
        <main className="photos">
            {imagesDisplay}
        </main>
    )
}
