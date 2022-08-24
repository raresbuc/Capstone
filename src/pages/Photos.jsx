import React, {useContext} from "react"
import {Context} from "/src/Context"
import Image from "/src/components/Image"
import {getClass} from "/src/utils/index"

export default function Photos() {
    const {allPhotos} = useContext(Context)

    const imageElements = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
    ))

    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}