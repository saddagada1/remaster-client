import type { NextPage } from "next";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMeQuery } from "../../generated/graphql";
import profileStyles from "../../styles/Profile.module.css";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Void from "../../components/Helpers/Void";
import RequireAuth from "../../components/Auth/RequireAuth";

const Profile: NextPage = () => {
  const [{ data }] = useMeQuery();

  return (
    <RequireAuth>
      <div className={profileStyles["profile-page-root"]}>
        <Head>
          <title>Profile</title>
        </Head>
        <div className={profileStyles["profile-user-container"]}>
          <div className={profileStyles["profile-user-card-fc"]}>
            <div className={profileStyles["profile-user-card-settings"]}>
              <Link href="/profile/settings">
                <FontAwesomeIcon icon={faGears} />
              </Link>
            </div>
          </div>
          <div className={profileStyles["profile-user-main-fc"]}>
            <h1>@{data?.me?.username}</h1>
            <div className={profileStyles["profile-user-main-personal-fc"]}>
              <h3>{data?.me?.username}</h3>
              <div
                className={profileStyles["profile-user-main-followers-fc"]}
              ></div>
            </div>
            <div className={profileStyles["profile-user-main-bio-fc"]}>
              <Void>{}</Void>
            </div>
          </div>
        </div>
        <div className={profileStyles["profile-remasters-container"]}></div>
      </div>
    </RequireAuth>
  );
};

export default Profile;
