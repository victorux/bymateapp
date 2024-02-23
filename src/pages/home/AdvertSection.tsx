import styles from "./home.module.scss";

export default function AdvertSection() {
  return (
    <div className="container mt-20">
        <div className={styles.section__heading}>Rooms: List Yours or Find One</div>
        <div className="flex justify-center gap-20 mt-8">
            <div className={styles.ad__card}>
                <h5>Need a room?</h5>
                <p>Post a free ad to let people know you're looking!</p>
                <button>Post Your Ad for Free</button>
            </div>
            <div className={styles.ad__card}>
                <h5>Have a room to rent?</h5>
                <p>Post a free ad to rent out your room.</p>
                <button>Post a free ad</button>
            </div>
        </div>
    </div>
  )
}
