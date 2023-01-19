import React from 'react'
  interface IReview {
    body: string
    email: string
    id: number
    name: string
    postID: number
  }
 function  Reviews ({reviews}: {reviews: IReview[]})  {
  const el = true
  return (
    <div>
      <h1>Clients reviews</h1>
      <div className="reviews">
        {reviews.map(review => (
          <div key={review.id} className='review'>
            {review.id}{' '}
            {`${review.body.slice(0, 90)}...`}
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const responce = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await responce.json()
  return {
    props: {
      reviews: data.slice(0,20)
    }
  }
}

export default Reviews