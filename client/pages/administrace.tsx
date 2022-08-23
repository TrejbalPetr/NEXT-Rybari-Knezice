import Link from "next/link"
import {useState} from "react"
import {gql, useMutation, useQuery} from "@apollo/client"
import styles from '../styles/Administration.module.css'

const EDIT_MAINDATA = gql`
  mutation Mutation($mainDataInput: MainDataInput) {
    editMainData(mainDataInput: $mainDataInput)
  }
`;

const GET_MAINDATA = gql`
    query Query {
      getMainData {
        title
        subtitle
        lastChange
      }
    }
`;

function administrace(this: any) {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');

    //MUTATION
    const [editMainData] = useMutation(EDIT_MAINDATA)

    //QUERY
    const id = "62fbc939955cc9357fb57fa1" //ID - kde jsou ulozena data pro HomePage
    const { loading, error, data } = useQuery(GET_MAINDATA, {
        variables: { id },
    });

    if(loading) return <div>Spinner...</div>;
    if(error) return <div>Ajaj někde se stala chyba...</div>;

  const handleClick = (event: any) => {
    event.preventDefault();

    console.log(title)
    console.log(subtitle)

    editMainData({variables: {mainDataInput: {title: title, subtitle: subtitle}}})
  };

  return (
    <div className={styles.Admin}>
        <h1>Administrace</h1>
        <h3><Link href="/"><a>Domů</a></Link></h3>
        <h2>Hlavní strana</h2>
        <p>Poslední úprava: {data.getMainData.lastChange}</p>
        <div className={styles.Forms}>
          <form>
              <input 
                  type="text"
                  defaultValue={data.getMainData.title}
                  onInput={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
                  autoComplete="off"
              />
              <input 
                  type="text"
                  defaultValue={data.getMainData.subtitle}
                  onInput={(event: React.ChangeEvent<HTMLInputElement>) => setSubtitle(event.target.value)}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSubtitle(event.target.value)}
                  autoComplete="off"
              />
              <button onClick={handleClick}>Uložit</button>
          </form>
        </div>
    </div>
  )
}

export default administrace