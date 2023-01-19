
const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? 'from-red-400 to-red-600' : 'from-indigo-400 to-indigo-600'} bg-gradient-to-br text-center text-white font-bold uppercase rounded-xl p-3 text-sm mb-10`}>
        {alerta.msg}
    </div>
  )
}

export default Alerta