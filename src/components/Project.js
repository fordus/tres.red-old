
import Default from '../img/default.jpg'

export default function Project(props) {

    const { project, title} = props

    return (
        <a className='card-wrap animated animatedFadeInUp fadeInUp' href={project.link} target='_blank' rel='noopener noreferrer' key={title}>
            <div className='card'>
                <img loading='lazy' className='card-image' src={project.thumbnail ?? Default} alt={project.title} data-holder-rendered='true' />
                <div className='card-body'>
                    <h3 className='card-title'>{project.title}</h3>
                    <p className='card-description package-description'>{project.description}</p>

                    <div className='addon-tags'>

                        {project.tags.map((tag) => (
                            <span className='addon-tag' key={tag}>
                                {tag}
                            </span>
                        ))}

                    </div>
                    <div className='card-footer'>
                        <object>
                            <a href={project.link} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>
                                <svg className='btn-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'>
                                    <path fill-rule='evenodd' d='M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z' />

                                </svg>
                                <span>View</span>
                            </a>
                        </object>
                        <div className='card-stats'>
                            <div className='card-stat' id='addon-likes'>
                                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'>
                                    <path fill-rule='evenodd' d='M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z' />
                                </svg>
                                <span>{project.stars}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}