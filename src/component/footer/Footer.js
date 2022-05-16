import './style.css'
export default function Footer(props) {
    return (
        <footer className="footer">
            <p className='paragrafo'>
                {props.children}
            </p>

        </footer>
    )
}