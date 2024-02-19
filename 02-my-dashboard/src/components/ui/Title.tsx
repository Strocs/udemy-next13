interface Props {
  title: string
  pre?: string
}

export const Title = ({ title, pre }: Props) => {
  return (
    <h1
      className={`text-7xl my-2 font-black text-center ${
        pre ? 'flex flex-col' : ''
      }`}
    >
      {pre && (
        <small className='text-3xl font-light text-blue-500 leading-none'>
          {pre}
        </small>
      )}
      {title}
    </h1>
  )
}
