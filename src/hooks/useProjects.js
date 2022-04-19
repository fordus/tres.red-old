import { useState, useEffect} from 'react'
import getProjects from '../services/getProjects'

export function useProjects () {
  const [loading, setLoading] = useState(false)
  const [ projects, setProjects ] = useState([])

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      getProjects().then(projects => {
        setProjects(projects)
        setLoading(false)
      })
    }, 5000)
  }, [setProjects])

  return [ loading, projects ]
}