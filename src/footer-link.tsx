export function FooterLink(props: { url: string; label: string; }) {
    return <p><a href={props.url}>{props.label}</a></p> 
    
}