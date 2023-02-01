import styles from "../styles/NavbarFooter.module.css";
import { userinfo } from "../Constants/userinfo";
import Link from "next/link";

const Footer = ({ currentTheme }) => {
    return (
        <div
            className={styles.footermain}
            style={{
                backgroundColor: currentTheme.footerColor,
                color: currentTheme.subtext,
            }}
        >
            <div className={styles.footertable}>
                <Link legacyBehavior={true} href="/">
                    <a>
                        <h2 className={styles.footerlogo}>
                            {userinfo.logoText}
                        </h2>
                    </a>
                </Link>
                <ul>
                    <li className={styles.listHeading}>Socials</li>
                    {userinfo.socials
                        ? userinfo.socials.map((social, key) => {
                              return (
                                  <Link
                                      legacyBehavior={true}
                                      href={social.link}
                                      key={key}
                                  >
                                      <a>
                                          <li>{social.type}</li>
                                      </a>
                                  </Link>
                              );
                          })
                        : null}
                    <Link
                        legacyBehavior={true}
                        href={`mailto:${
                            userinfo.contact.email ? userinfo.contact.email : ""
                        }`}
                    >
                        <a>
                            <li>Mail</li>
                        </a>
                    </Link>
                </ul>
                <ul>
                    <li className={styles.listHeading}>Pages</li>
                    <Link href="/#home">
                        <li>Home</li>
                    </Link>
                    <Link href="/#about">
                        <li>About</li>
                    </Link>
                    <Link href="/work/#work">
                        <li>Work</li>
                    </Link>
                    <Link href="/contact">
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
