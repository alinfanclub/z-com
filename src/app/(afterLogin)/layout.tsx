import Link from "next/link";
import styles from "./layout.module.css";
import Image from "next/image";
import zLogo from "../../../public/zlogo.png";
import NavMenu from "./_component/NavMenu";
import LogoutButton from "./_component/LogoutButton";
import FollowRecomend from "./_component/FollowRecomend";
import TrendSection from "./_component/TrendSection";
import RightSearchZone from "./_component/RightSearchZone";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function AfterLoginLayout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      <header className={styles.leftSectionWrapper}>
        <section className={styles.leftSection}>
          <div className={styles.leftSectionFixed}>
            <Link href="/home" className={styles.logo}>
              <div className={styles.logoPill}>
                <Image src={zLogo} alt="z.com 로고" width={40} height={40} />
              </div>
            </Link>
            <nav>
              <ul>
                <NavMenu />
                <Link href="/compose/tweet" className={styles.postButton}>
                  게시하기
                </Link>
              </ul>
            </nav>
            <LogoutButton />
          </div>
        </section>
      </header>
      <div className={styles.rightSectionWrapper}>
        <div className={styles.rightSectionInner}>
          <main className={styles.main}>{children}</main>
          <section className={styles.rightSection}>
            <RightSearchZone />
            <TrendSection />
            <div className={styles.followRecomend}>
              <h3>팔로우 추천</h3>
              <FollowRecomend />
              <FollowRecomend />
              <FollowRecomend />
            </div>
          </section>
        </div>
      </div>
      {modal}
    </div>
  );
}
