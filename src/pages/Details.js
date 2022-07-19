import React from 'react'
import '../styles/Detail.css'
import Tag from '../components/Tag'
import Error from '../components/Error'
import Carrousel from '../components/Carrousel'
import Collase from '../components/Collase'
import Star from '../components/Star'
import { useState, useEffect } from 'react'

import { useSearchParams } from 'react-router-dom'

const Details = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')
  let data = []

  const [datas, setDatas] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('../../locationList.json')
      .then(function (res) {
        return res.json()
      })
      .then(function (datas) {
        setDatas(datas)
        setIsLoaded(true)
      })
      .catch(function (err) {
        setError(err)
        setIsLoaded(true)
        // return <Redirect to="/" />
      })
  }, [])

  if (error) {
    console.log('error')
    return <div>Erreur : {error.message}</div>
  } else if (!isLoaded) {
    console.log('isloded')
    return <div>Chargement...</div>
  } else if (datas) {
    console.log('datas', datas)

    const temp = datas.filter((data) => data.id == id)
    console.log('temp', temp)
    if (temp.length == 0)
      return (
        <div>
          <Error />
        </div>
      )
    datas.map((pictures) => {
      if (pictures.id === id) {
        data = pictures
      }
    })
    let Rating = () => {
      return (
        <ul className="star">
          {Array.from(Array(5), (e, index) => {
            if (index < parseInt(data.rating)) {
              return (
                <div key={`${data.id}-${index}`} className="star--yes">
                  <Star />
                </div>
              )
            } else {
              return (
                <div key={`${data.id}-${index}`} className="star--no">
                  <Star />
                </div>
              )
            }
          })}
        </ul>
      )
    }
    return (
      <main>
        <Carrousel key={data.id} pictures={data.pictures} />
        <div className="Card">
          <div className="Card__title">
            <h1>{data.title}</h1>
            <p>{data.location}</p>
            <Tag tags={data.tags} />
          </div>
          <div className="flexRowB">
            <div className="flexRow">
              <p className="wrap">{data.host.name}</p>
              <img src={data.host.picture} alt="Host" className="picture" />
            </div>
            <Rating />
          </div>
        </div>
        <div className="grid">
          <Collase
            key={data.id + 2}
            datas={data.equipments}
            title="Equipements"
          />
          <Collase
            key={data.id + 3}
            datas={data.description}
            title="Description"
          />
        </div>
      </main>
    )
  }
}

export default Details
