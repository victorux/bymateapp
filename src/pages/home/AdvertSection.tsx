import Button from "../../components/Buttons/Button";
import styles from "./home.module.scss";

export default function AdvertSection() {
  const handleAdPost = () => {
    console.log('clicked: Post a free ad!');
  }

  return (
    <div className="container mt-20">
        <div className={styles.section__heading}>Rooms: List Yours or Find One</div>
        <div className="flex justify-center gap-20 mt-8">
            <div className={styles.ad__card}>
                <h5>Need a room?</h5>
                <p>Post a free ad to let people know you're looking!</p>
                <Button onClick={handleAdPost}>Post a free ad</Button>
            </div>
            <div className={styles.ad__card}>
                <h5>Have a room to rent?</h5>
                <p>Post a free ad to rent out your room.</p>
                <Button onClick={handleAdPost} >Post a free ad</Button>
            </div>
        </div>
    </div>
  )
}
