import React, { useState, useContext } from "react";
import { Context } from "../context/useContext"

export default function Image({ className, img }) {
      const [hovered, setHovered] = useState(false)
      const {toggleFavorite} = useContext(Context);
      return (
            <div
                  className={`${className} image-container`}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
            >
                  {hovered &&
                        <>
                              <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
                              <i className="ri-add-circle-line cart"></i>
                        </>
                  }
                  <img className="image-grid" src={img.url} alt="image" loading="lazy" />
            </div>
      )
}