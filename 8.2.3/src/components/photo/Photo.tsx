import * as React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import photos from '../../db/photos'

const Photo: React.FC = () => {
  const { photoIndex } = useParams()
  const navigate = useNavigate()
  const { current: random } = React.useRef((Math.random() * photos.length) | 0)

  const currentPhotoIndex = photoIndex ? Number(photoIndex) : random
  const currentPhoto = photos[currentPhotoIndex]
  const [rating, setRating] = React.useState(0)

  const handlePrevious = () => {
    navigate(`/${currentPhotoIndex - 1}`)
  }

  const handleNext = () => {
    navigate(`/${currentPhotoIndex + 1}`)
  }

  React.useEffect(() => {
    setRating(0)
  }, [currentPhoto])

  return (
    <div>
      <img width={400} height={450} src={currentPhoto.link} alt="Zdjęcie" />
      <div>
        <p>Ocena: {rating || currentPhoto.rating}</p>
        <div style={{ display: 'flex' }}>
          {[...Array(5)].map((_, index) => (
            <button
              key={index}
              onClick={() => setRating(index + 1)}
              style={{
                fontSize: '24px',
                color: index < rating ? 'green' : 'gray',
                backgroundColor: 'transparent',
                outline: 'none',
                border: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {index < rating ? '★' : '☆'}
            </button>
          ))}
        </div>
      </div>
      <p>Autor: {currentPhoto.author}</p>
      <p>Data dodania: {currentPhoto.date}</p>
      <p>{currentPhoto.description}</p>
      <div>
        <button disabled={!(currentPhotoIndex > 0)} onClick={handlePrevious}>
          {'<'}
        </button>
        <button
          disabled={!(currentPhotoIndex < photos.length - 1)}
          onClick={handleNext}
        >
          {'>'}
        </button>
      </div>
    </div>
  )
}

export default Photo
