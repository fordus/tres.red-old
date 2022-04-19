export default function getProjects () {
    const URL = `https://raw.githubusercontent.com/fordus/JSON/main/projects.JSON`
  
    return fetch(URL)
      .then(response => response.json())
      .then(response => {
        const data = response
        const projects = data.map(item => {
          const { thumbnail, title, description, tags, link, starts } = item
          return { thumbnail, title, description, tags, link, starts }
        }
        )
        return projects
      })
  }
