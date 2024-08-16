import styles from "./card.module.css";
import Image from "next/image";

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <Image
          src={"/img/card1.jpg"}
          alt="Vaccine 1"
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className={styles.cardText}>
        <h1 className={styles.cardVaccineName}>Vaxigen-20</h1>
        <h3 style={{ paddingTop: "16px" }}>
          Vaxigen-20 is a vaccine invented to protects against COVID-19. It
          requires 2 shots, given 3 weeks apart, and is 95% effective at
          preventing serious illness. Common side effects include mild fever,
          tiredness, and soreness at the injection site.
        </h3>
      </div>
    </div>
  );
}
