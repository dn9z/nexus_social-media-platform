import * as React from "react";
import styled from "styled-components";
import * as themeConf from "../../styles/theme";
import Pic from "../../img/Portrait_Placeholder.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
`;

const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
  position: sticky;
  top: 0;
  z-index: 8;
  background-color: rgba(0, 0, 0, 0.7);
  color: springgreen;
  font-family: Quicksand;

  > p {
    font-weight: 700;
    // font-size: 1.5rem;
    font-size: clamp(1.1rem, 0.7203rem + 2.1695vw, 1.5rem);
    letter-spacing: 0.1rem;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50vh;
`;

const Background = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 6px solid rgb(51, 51, 51);
  height: 50vh;
  position: relative;
  background: springgreen;
`;
const ProfileInfo = styled.div`
  padding: 60px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid black;
  box-shadow: 0px 2px 20px black;
  height: auto;
  background-color: ${themeConf.backgroundColor};
  font-family: Quicksand;
`;
const Image = styled.div`
  display: flex;
  border: 4px solid white;
  box-shadow: 0px 5px 15px black;
  border-radius: 50%;
  position: absolute;
  bottom: -3rem;
  left: 2rem;
  width: 6rem;
  height: 6rem;
  background-color: ${themeConf.backgroundColor};
  cursor: pointer;
`;
const Feed = styled.div`
  text-align: center;
  border: 2px solid black;
  margin: 35px 15px 15px 15px;
  border-radius: 5px;
  height: auto;
`;

const Username = styled.div`
  font-weight: 700;
  font-size: clamp(1.4rem, 1.1153rem + 1.6271vw, 1.7rem);
  margin-bottom: 1rem;
`;
const Email = styled.div`
  font-size: clamp(1.1rem, 0.9102rem + 1.0847vw, 1.3rem);
  font-weight: 700;
`;
const SelfInfo = styled.div`
  font-size: clamp(1rem, 0.8102rem + 1.0847vw, 1.2rem);
  font-family: Jost;
`;
const KeyData = styled.div`
  font-size: clamp(1rem, 0.8102rem + 1.0847vw, 1.2rem);
  font-family: Jost;
`;
const FollowContainer = styled.div`
  display: flex;
  font-weight: bold;
  font-size: clamp(0.8rem, 0.6102rem + 1.0847vw, 1rem);
`;

const Following = styled.div``;
const Followers = styled.div`
  margin-left: 40px;
`;

const Profile: React.FC = () => {
  return (
    <>
      <Container>
        <Banner>
          <p>Username</p>
        </Banner>

        <ProfileContainer>
          <Background>
            <div>{/* BackgroundImage */}</div>
            <Image>
              <img style={{ borderRadius: "50%" }} src={Pic} alt="Pic" />
            </Image>
          </Background>

          <ProfileInfo>
            <Username>
              <p>Username</p>
            </Username>
            <Email>
              <p>Email</p>
            </Email>

            <SelfInfo>
              <p>Some personal Info Text</p>
            </SelfInfo>
            <KeyData>
              <p>Some Key Data</p>
            </KeyData>

            <FollowContainer>
              <Following>
                {" "}
                <p>Following:</p>{" "}
              </Following>
              <Followers>
                {" "}
                <p> Followers:</p>
              </Followers>
            </FollowContainer>
          </ProfileInfo>
        </ProfileContainer>

        <Feed>
          <h1>Profile Feed</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod
            voluptas eius modi dicta sit in magnam vitae officia suscipit,
            distinctio dolorum ad iste porro asperiores id, aliquam quidem quo!
            Officia, ad repudiandae a repellat ducimus non, blanditiis eius quae
            beatae architecto dolore aspernatur, similique tenetur unde
            laboriosam porro! Ex culpa quis impedit, ab expedita magni nam
            similique porro eius. Harum blanditiis suscipit voluptatibus veniam
            nulla ex reprehenderit nostrum? Rerum ab amet libero deserunt ipsam.
            In ab excepturi aliquam accusantium beatae sequi dolores ipsum
            veniam blanditiis maxime expedita, impedit alias. Repellendus esse
            ea ratione ex quam, praesentium est consectetur earum similique
            eveniet illum animi doloremque id eligendi dolorum! Nostrum ab et
            quidem nulla minus odio minima, culpa totam quia doloremque!
            Repellendus, eos. Distinctio ullam incidunt commodi eius rerum
            nesciunt facilis nihil unde sit officia aperiam architecto libero,
            tempora quae adipisci a ut inventore quo error nobis laborum
            praesentium. Natus, sit. Consequuntur suscipit exercitationem,
            labore vitae cumque officia! Necessitatibus in mollitia neque
            recusandae similique est dicta libero dolore, temporibus aperiam
            omnis repellat animi commodi quis eum, deserunt esse, quae
            consectetur modi. Adipisci voluptate obcaecati est minima quae
            incidunt eligendi temporibus. Vero quisquam ipsa nam hic ullam totam
            modi deleniti quia harum, commodi dolores sapiente, cumque rem.
            Molestiae omnis unde tempore possimus. Voluptas obcaecati suscipit
            voluptatem perspiciatis asperiores consequatur, laudantium voluptate
            laboriosam unde sint natus debitis laborum repellat non sapiente
            adipisci quam quas sit architecto sunt magni. Tenetur omnis error
            odio. Architecto. Minima laboriosam deleniti nostrum id expedita
            voluptate ipsum rem fugit quidem repellat animi saepe exercitationem
            error, magnam accusantium beatae veritatis commodi, distinctio ex
            facilis excepturi quaerat! Aliquid officia sit sunt! Sit doloribus,
            quo voluptatibus nemo, necessitatibus vero illum, et similique
            facere esse at vitae earum qui eveniet perferendis dolorum culpa
            quasi optio eligendi porro iste? Cum eligendi optio nemo delectus.
            Numquam, dolorum voluptatem. Laborum dolorem officiis earum
            repudiandae temporibus numquam eum mollitia ut aliquam, aliquid amet
            hic nostrum in necessitatibus, provident fugit voluptates
            accusantium explicabo animi voluptatibus doloremque sapiente natus?
            Sequi assumenda obcaecati veniam aut enim, eligendi impedit?
            Quisquam eveniet, voluptas repellat temporibus, libero itaque modi
            vitae possimus sunt nam iusto iste quaerat perspiciatis. Beatae
            nulla voluptate minima veritatis esse? Odit deleniti, in repellendus
            voluptatibus quos ad voluptate quia facilis adipisci. Ipsum
            necessitatibus magni nemo dicta facilis, ea modi eos!
            Necessitatibus, voluptatum harum dolor vitae blanditiis asperiores
            reiciendis ad recusandae. Et praesentium officia rem illum!
            Provident nostrum velit cum fuga est alias incidunt earum! Nostrum
            quae quaerat asperiores! Reprehenderit a atque et sunt ab
            perferendis odio nisi quis sit doloremque? Quod repudiandae minima
            iusto delectus, aut et accusantium expedita repellat quibusdam
            eligendi fugiat accusamus eos asperiores perferendis harum,
            excepturi, maxime mollitia sit. Explicabo adipisci iure dicta
            exercitationem ab eligendi aliquam! Rem quod perspiciatis facilis
            mollitia sint impedit, iste ut sit harum sequi dolorum, esse
            suscipit magnam unde consequatur nam ipsam temporibus, quas tempore
            molestiae non dignissimos deserunt excepturi! Obcaecati, corporis?
            Aspernatur quia doloribus culpa, accusamus repellat nam veritatis
            sit sequi? Nulla autem eligendi corrupti maiores, vero eos libero!
            Iure nulla dolore exercitationem provident hic quam illum itaque
            beatae assumenda ipsam! Quidem inventore iusto iure, corrupti iste
            earum laboriosam cumque beatae molestiae delectus. Incidunt
            doloribus itaque, rerum iusto esse provident impedit dignissimos
            natus dolorem a quod. Modi quas atque saepe expedita. Ab animi
            laborum, nisi expedita voluptatibus dolore. Inventore tenetur esse,
            quas vitae quaerat alias, aperiam molestias incidunt nostrum minus
            eaque. Mollitia expedita molestias neque deleniti impedit totam
            possimus iure in! Incidunt cum sunt doloremque explicabo, asperiores
            assumenda odio harum eos sit cumque mollitia veritatis error ex
            maxime voluptatibus unde laborum dolore, deserunt magnam ratione
            magni quam quisquam optio quas. Iusto. Mollitia id non commodi
            voluptates repellendus consequuntur perspiciatis optio eos itaque
            culpa molestiae assumenda sequi minus, incidunt aliquam quos
            deserunt quibusdam perferendis! Iusto, aliquid. Unde asperiores
            earum iusto! Laboriosam, molestias? Repellat officiis magnam
            tenetur, consequatur magni quos dolore provident consectetur rem
            optio corrupti perspiciatis porro quidem atque facilis, recusandae,
            aut placeat obcaecati expedita numquam distinctio! Molestias ratione
            aliquid distinctio suscipit! Veniam repellendus quisquam animi sequi
            libero accusamus non! Soluta natus tenetur dignissimos minus maxime
            odit, molestiae iure facere nam eligendi laborum ipsum possimus
            laboriosam rem ipsa aperiam doloremque eos quod! Provident, rerum
            maiores illo officia beatae soluta quae nulla dolorem vitae dicta
            architecto est iusto delectus molestias eligendi tempore eius
            temporibus at? Officiis soluta facere cupiditate aspernatur
            perferendis similique rem. Velit, vel rerum quo maiores quibusdam
            veritatis quis magnam in eaque doloremque quos eveniet autem,
            voluptatum perspiciatis quas asperiores quod. Vero quos eos ipsam
            quo. Distinctio ea id quas dolor. Perspiciatis ea, molestiae aperiam
            aspernatur aut rem quas praesentium, maxime temporibus labore,
            nesciunt soluta quae consectetur quis animi mollitia. Veniam
            accusantium asperiores explicabo eius reiciendis necessitatibus
            optio expedita sit cupiditate. Dolorum tempore voluptatibus maiores
            neque, laboriosam nisi ad eum eveniet. Incidunt ex itaque neque
            temporibus cupiditate amet, quos doloremque recusandae delectus?
            Dignissimos voluptate possimus quis quidem quo esse libero ex! Porro
            accusamus officiis deleniti quas qui molestiae minima! Commodi
            dolorem vero accusantium odit saepe ea et autem voluptate, eveniet
            aliquam soluta veritatis voluptatibus distinctio qui libero cum
            deserunt cupiditate rem! Eum maxime deleniti voluptatem quos tempore
            accusamus labore facilis cum ut aliquid, dolores numquam cupiditate?
            Et, mollitia quo obcaecati, aperiam voluptas reiciendis ipsam non
            nihil asperiores veniam, quam amet facilis. Magnam laborum in
            repellendus ipsum debitis ab harum aliquid quae earum ea ducimus
            numquam sed rerum, eos dicta natus! Animi id assumenda iste.
            Consectetur ratione quod, minima quibusdam cum natus? Earum iusto
            nihil neque accusamus. Ipsam expedita ullam est enim exercitationem
            quibusdam velit eveniet, voluptas vel cum dignissimos voluptates
            optio error earum nulla perferendis nam nisi blanditiis accusamus
            eos molestiae. Impedit labore voluptatem dignissimos. Perferendis
            nostrum esse neque possimus iste, assumenda ipsam excepturi
            recusandae animi incidunt, vero odio quaerat sunt corporis
            voluptatem facere a asperiores et dolore dicta! Doloribus,
            perspiciatis! Explicabo cumque ducimus deleniti ullam excepturi,
            temporibus neque rem aliquam eveniet, est officiis! Quae recusandae
            voluptate asperiores nihil aut ipsa blanditiis provident consectetur
            officia earum, reprehenderit sequi, fugit vel sunt! Ducimus
            molestiae dignissimos quae quisquam voluptatem, rem est cumque velit
            accusantium necessitatibus eos, odio quia quo nobis magni corporis
            unde iure ea? Ea in soluta eveniet nemo doloremque possimus dolores?
            Rem et saepe aperiam culpa, exercitationem, nobis accusantium quasi
            obcaecati illo officiis delectus! Vel accusamus commodi tenetur
            pariatur, facere nulla, minima excepturi similique illum optio id,
            doloribus totam modi reiciendis. Illum maiores, dolore aliquid quae
            ex odit hic laudantium vel temporibus delectus voluptas perspiciatis
            earum autem architecto sunt eos ipsam error explicabo doloribus
            suscipit illo? Et deserunt exercitationem voluptates numquam.
            Consectetur beatae animi, fuga iure sit incidunt corporis explicabo,
            voluptates atque repudiandae, asperiores fugiat dicta autem illum
            quos! Assumenda asperiores dolorum molestias enim in repellat
            excepturi distinctio error, facilis dolor. Illum magni deleniti
            facere similique. Ipsum quod, voluptatem eaque dolorem pariatur,
            debitis dolores deleniti officia aliquid quia temporibus inventore
            id obcaecati voluptates perferendis! Libero modi sapiente
            repellendus doloribus harum quibusdam. Repellendus sit eveniet
            accusamus vero et earum asperiores ullam porro modi! Labore,
            possimus ipsa id non, vel similique repellendus facilis asperiores
            iusto, veritatis atque nam officiis optio totam vero quisquam?
            Itaque ab, harum est impedit illum vero labore laboriosam minima
            perferendis qui quo ullam sequi in voluptatibus ex aperiam at
            mollitia consequuntur consectetur eligendi molestiae culpa? Quisquam
            ipsum molestiae nesciunt. Autem voluptatum consequatur fugit
            architecto rerum totam aperiam asperiores commodi. Ea minima
            repellat quisquam impedit consectetur, veniam doloribus ut
            distinctio aut voluptatem tempore, provident rerum vitae placeat
            optio officiis voluptates. Reprehenderit velit error, quos ea labore
            omnis recusandae, est aperiam rem maiores dolores voluptas illo
            corporis libero facilis voluptatum vero ipsa, doloremque eligendi
            sequi! Molestias tempore alias exercitationem cupiditate voluptas.
            Quam itaque in, harum placeat est quia tempore ducimus nesciunt
            temporibus dignissimos voluptas repudiandae saepe maiores sit
            tempora esse facilis tenetur, quae magni ab possimus sint labore,
            qui blanditiis! Consequuntur. Alias dolor qui officia reiciendis
            ipsam, obcaecati quasi iste quae facilis asperiores, dicta sit.
            Consequatur doloremque possimus quae ab neque asperiores eligendi
            voluptate, voluptates architecto mollitia tenetur eos, minus
            perferendis! Quo deleniti placeat maxime a itaque blanditiis beatae
            ut vero. Asperiores maxime impedit molestias reprehenderit provident
            pariatur reiciendis corrupti animi nihil? Tempore magni, quidem
            porro ipsum tenetur doloremque harum repellendus. Atque et porro
            corrupti est quia quasi repudiandae? Ducimus delectus magni
            temporibus. Repudiandae, blanditiis veritatis. Inventore architecto
            nesciunt ipsum itaque, libero explicabo aliquid hic quam totam sunt
            ducimus aliquam fugiat? Iste aperiam voluptatibus eveniet. Minima
            minus vel voluptatum fugit quibusdam iure. Maxime minus quia
            architecto quos minima officia aspernatur quo delectus quae aperiam,
            perspiciatis ad, nihil natus? Laboriosam, reprehenderit aperiam.
            Culpa dolorum veniam, ullam expedita, delectus nisi amet quia
            voluptas dolores aut assumenda beatae autem provident in vitae
            recusandae voluptatibus esse laborum? Sed illum facere rem a neque
            vero voluptatum. Atque exercitationem rerum molestiae debitis libero
            natus, consequatur officiis, beatae labore est itaque odit incidunt
            voluptatum iste voluptates id. Magnam quibusdam voluptatibus
            voluptatem provident eveniet commodi, doloribus est! Commodi, porro!
            Eum optio quia consectetur similique exercitationem minima animi,
            facilis esse. Necessitatibus error laboriosam provident assumenda
            molestias repudiandae, cupiditate a dolorum obcaecati expedita
            eligendi velit inventore? Voluptate corporis quas unde impedit.
          </p>
        </Feed>
      </Container>
    </>
  );
};

export default Profile;
