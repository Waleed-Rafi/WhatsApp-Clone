import React, { useState } from "react";
import Card from "../../Components/Card/Card";
import EmojiPicker from "../../Components/EmojiPicker/EmojiPicker";
import AppInput from "../../Components/AppInput/AppInput";
import SmileEmojiOpener from "../../Components/SmileEmojiOpener/SmileEmojiOpener";
import { IEmojiData } from "emoji-picker-react";
import UserMessageCard from "../../Components/UserMessageCard/UserMessageCard";
import "./Home.css";

export default function Home() {
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [yourMessage, setYourMessage] = useState("");

  const toggleEmojiPicker = () => {
    setOpenEmojiPicker(!openEmojiPicker);
  };

  const onEmojiClick = (
    event: React.MouseEvent<Element, MouseEvent>,
    emojiObject: IEmojiData
  ) => {
    console.log(emojiObject);
    setYourMessage(yourMessage + emojiObject.emoji);
  };

  const messageSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(yourMessage);
  };

  return (
    <div className="home-screen-container background">
      <Card
        containerStyles={{
          width: "72vw",
          height: "93vh",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <div className="home-left-container">
          <div className="home-left-header"></div>
          <div className="home-left-notification-alert"></div>
          <div className="home-left-search-bar">
            <AppInput
              inputContainerStyles={{
                textAlign: "center",
                paddingTop: "10px",
              }}
              inputStyles={{
                borderRadius: "20px",
                border: "none",
                padding: "9px",
                width: "85%",
              }}
              placeholder="Search"
              value=""
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div className="home-left-all-messages">
            <UserMessageCard
              name="Waleed"
              profilePic="data:image/jpeg;base64,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"
              message="Hello"
            />
            <UserMessageCard
              name="Ahmad"
              profilePic="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgWFhYZGBgYGhwYGRocGhgZGhwYGhoZGhoYGhgcIS4lHB4rIRgYJjgmKy80NTU1HCQ7QDs0Py40NTEBDAwMEA8QHhISHjQsISs0NDQ0NDQxNDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxPzQ0ND80PzQxP//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAAEDBAUHAgj/xABBEAACAQIEAwYDBQYEBQUAAAABAhEAAwQSITEFQVEGIjJhcYETkbEHI0KhwRRSYnKC0RZTsvAzNJLC4RUkY6Lx/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAJhEAAgICAgICAgMBAQAAAAAAAAECEQMhEjEEQSIyE1EUYXGRBf/aAAwDAQACEQMRAD8ApYnFFNS5AnqaiTigO1w/M0uNWu41C+AeHUGIza6cq5YxtHZKXF9BYcY377fM1s9mMVca8qh2g+MzPc5iD7ba15sYZHHctqAN2fQVdwOBKAPZVi5kNoMoBGux0FFxMlKSutBo+JRYURz0A2rG41iZtO2QEhG3MHSdJ9KGu1uPu27du6gZGC5W6MrRvOuhGnqaCsc2KvQc7tmAWBmiAJ1jQ6H1oIjxbdIy1ssHB8CsdDvoTG29dN4LwQWbJUsjkvmV8uWAQF1B2Ik0A4nBuo1000BBEaTufnRP2TtXntOReynQZSCwH8WuoO4kUZU4lZY3BUwsTCIuTOy3GtFzbIHI/h1O4/tUuAxV7vfFVUzMYAOY5SNFJ2mhO3xk4AGw9rMRcztdE5cjBc0aavoedbt3FXAxa2me3KlTOpUgElTrqJO9TVk2qCXCsNSpnaeW3Khtzizea7dtBLYML3lcQJhmVWOprPu9qfh5lCgNJB1O8/kam4bxy5dRswUd7KD3m5cxzoSkqKLFLjyrQUm0SjKj5WIlWJJjntQ7dv4lbq2Tch2IA1EHQnf2re4er5RIAIA1Ppyqvi8K+Y3gUcgBVOxUE6nzPKmjKkJaTB3FcUxKOUNw51MECD+leH4zilAYuwDTB7utaOJ4ei3gw1/EWO5J3mNgKlx3DV3bK2WNFOwOtMm29dCSyqOqMYdo8T/mH5CvLdqMR/mfSklq2X205CaEuPoq32VVAAI5nmKetdhjkUnVHQOCcZxFy6iu8qTqIGoo+VDFcz7LJ99a/wB8q6ggMVoOw5Ek0Qsh9KdEM1PHWvbKKoTHWkxpgK9TRQBhTinilWMOKemGtPRAKlSpVgHFOOJ3XoOsJDj+b9aPeK4UuWVdzoJ0rD4JwF2vK1y2fhBjmJIWYE6c52rmxPR2zg5SpB72cQMEtyuvecEGY1+U0TEIghQFGwA0FCRxItd62skgARqQsdahHGHxLoioWyQbjA90GMoTXxE76dKMnfRsmOUIq2afFcEMS4svKoTLxGZsv4QdxudRtW9hsHbtIqIiqi6KAPnXG+K8TxeAxbsudUfwh8zgp0XvaEa6cq6Pb4y72PiBGR4lbbiCSIMf1cj51qpHNZs47CWri5XRWXoROo/WosPhLSCERRpAgAaDl+dc44v20drylEdRkKPbeVAuNzEcx+c0ZcM4yjqhzgl2ZR/SCT3d+VCmByfsg7W8Ie5az2YLIc5tsAUcc1KxvXnB4gFE0aGOoA0Bjbyirj8WXY6kj8O0dT09aFL/ABIpbVSzsS5ya/hJkISBo2sajWrLx5OrVIRZYu0nbBzi1tnvvktOUztlMNJIMMep1miHs3YZUcgEMAMoIOpHl8hVI8RuK0jvrIIgnMDqYnlGs+dWMfx82UV4JkRlbYtvPn61byfB4Q5J2h8P/pvIvxSRscA4jiXzG6yGCVQCFJcHw5dxHnyoixLqiMr6JEyDBLb6eW1AfBsQj4tLiEsHOY5RlGfxEEetdGxHD1voQxIJH0rhR0TUU1XQIv8AGut3EYq0qsfiI1Mn5VFw3F5AyEGSSrCemhE0WYayMNZIclUAJZh4hPPyrn2JxSZ2yAhJMSZMdSeZq+Gnejg8iPF2maq2kDgL1+VCXaOzGJcTMEbegrYtY8KwbmKx+NYn4l9n07xG2nKjKPEbx5XILeyn/Ht+n6V05K5j2XH39v0/SumrU8Z15lslZZplSKdXmvQWqkBopFK9gUopgWeVFeqelFagDUqelWMKlSpVjHNEshrjE7AsY6nWKp3sWA7KyM+gYAahNd2HQxHtWxjuHXFDupTMS2UHbU6TWD2ewuJdr7u+QFgGGVTmK8lJ0A1iuOKtaPUcqj8eza4Lw44g5nMIrd5ZnPpojAaACjAKqjQADoOVDXCbrWnKue6+vkW10Bq7ieIjKSBMab6D1NMc2Xk3t2TY/D2rwh0DhSGAYTDDY1F8MNGmn0rEwnaS1dZkFxcymG5anwwTvqDVt8VdUjuyPVZ9T/vlTVaNHC5K0x+J4C00llXz7sz1k8qDsVhcMxbKApzEDK0QJ70gdan4vxl0xDo7fdeMHoSBCnoQZNZX7erMRAyxmZjoCpzeIjcTFel4uGPFykjyvKlKMuKPGLcWiWz5h4FEQI10GvQT71R4lxDIqKrKzZgVk+EAyNvPStTiWGe7Ze0iWwrOt1XOjR0Dfu6R6Vh4PhDpeU3hnSGCle8ukiSOmtdE5Sl8UqX7IY+MHyvZs8IV3RgyZidcxnTYmOv/AJrYxmDVUKMykuoMRMLsGgmoOHY9EQqSQSQoPIzJAHnpU+NxiYdGe+YLoUAKrnePCV6ROukDSufycc4xrkP40053QNYy4LAKoBmQZ0uKQMrKZB8zp+ddA7LdqWvqDcQW9BBLeLqQIECa45i+JhiQgIU8icx9zAn5Col4i4iCdPPavPWPR6spRfR9EdoC1zC3AmrEQOcg7ge1cmxOGdDlcFSOR0P51l8L7aYmywIcsB+FtRRPxLtRZx+FYMuTEW4ZTqcw0zKD5jrTwcoumiGSKltMxMpO1QOhkA9afhuLAOtT4lgWkdafL0bx18gx7MD79D5fpXRbSk1z7sqs309P0ro6CufF0zpzdoSL0qevANOKuiDJKVNT0woqVKlWMKlSpqxhRSp6VYwH4twzhJgmR57E6fKqt5VRQuaAus7SepPKtUWAHe4wGfvKIGwEyZrDxnD0ku+VixhFI005mOe9cGK0z0MeRylSPWHAxDNDMFVlMiIJAIgTtv8ASri8DtTJlgB4STB9evvUHDVS2HbwBjqvIMvcJnoQoNeTxtDcFtWjdnJ5KP71V9k8jlyaAPt/bsq+ezbh8xNxgrAAwMo6dflWU3bTEZUQOdEAckCS8tJBjQRl/Oum49/iWHC5EW4CBmgTI0nzPvXOcRwF8MgbKrhoAcGQTHmJFNdKx8OGc33SPGBvC4ssCAZDiCSZ0EGN9qrDDZgqrqJYtMLKprEMQDAJ+ZqymMZEZNw8SATqw1Gukc5qpiMerOCywgUBlUkMTBDEDnNdi8m4KKR53leNwyu3YRnF5yEKkDLHNVyQdTyAEDnXnFMUttnhfuzDQVCmDlg+emvnWFgeLmHBR2SSAc2sbqrLzqbE31vHIrMmpd1MbeLKNddtq7/zrgkl2eb+FqVsg4f2oZbiOiDubhiDK6SNtDoTO9UuMYq9j8Q7gEiYRZkIvJascdw5AFzTUKmgA0AYiQOela/YuyPhu0btv6AaV5vkzlF77PS8aEX10Y6dkrmWSQD0pYbsu7E5zEdOdHagHYg+9MbcdK4nlkdyxRAjE9k2CyrEnzrDXPaeDowNdQzLMZl+YoS7ZYPK6OBodJ86eGRt0xMmONXEo3mEhwAobWBsOorQwwlVnrWcth3RCikxI0FaOGUhVBEGdRVpv4kcKqbD3sqPv09P0rpVuubdkh9+np+ldLUVLD0Vz9jxSpUqujnHpU1PRMKlSpVjCpU1PWMNFKlNKsYwbjSzKNCrFtRII5isbEuuUsxHccwYiARtHOtnEKQ7MOQP50OcVf7piI11jkZ8p8q42mpXE7Maf2RkXbtzEXBDhLSS7qPG4iAxblVtEss+RlUBhlBygMdNCrTPuaCsH2iZcWjBIXVHSd1iN+ugiiG5xdC+cWrrBO8C2p9QOZAM6nlVFS2y8JQld9ixdtnTIAzXMOxRh/DmVlcLzzKCNKq8ctXFwoQ58+bOAIGVNPEDsAS2nmKp8fwguObysfiNCrbUkMwO2UDViNz0olw2BcpleGGilWiIygctOtLKf6JS8lxXGKB/g/AiLKYks0w33Zy6BjlDgnSf0NQPhrauBlQs34oAGomB1OhotxN1MrIxGVlZTyPhMwPzoB4r2na6VRLaKqBlQFY7rad4k12eLnjGNSR5nkQlOXK9nrCssvkjQ5lMeFh4tOmmutQ8SwuZkcZVYkDKNTKmO95msVbj2zmVhJmdJGvSdI8vKpsReYhXUkOCGLCANNRAHnFXl5MWqROOCTejU43ZIshdO6c3OdyCCPLNWzgMKv7HazMVQrmbLpJbXU0P8FVr2Im9Fwsh8cNqXQFo5HU68qN+H2FNlEGygKPQaCuDyc3Jo9HxsDgtgg1m2twqhdWVsp1YQfet3HWGa2pLsYGvKdKunhaZsx9h51fuYYFMumgrmcrOhRoBsBZw+aGDZozTLQB1naiTjGEV8GxzF8sMCdSBI586sW+FIpkbGtFrKm06nVcuo66jSOfSjy2heOqMvgmE+Hg0JEM9wsP5AI+tYuO8f9VEbRlAE5JGTTQLA0+c0O48d/8Aqq7dxs5oazNBn2QH36eh+ldKArm3ZEffp6Gukihh6Gz9oelTTT10EBClSpqxh6VKlWMNT0qVYw1KnpVjAubzOpbOD3iDlBUyu4IO3MRQzxW38dCEbQ6EdIOoJHvVrtTxFsPmuoASSAwMwRIJ57wDWVwbi1y49pGtpbW6C8ySSO9HPQmDr+Vcabpl4T46fQO8T7NqWRbKF3GUvAiNdSWJ0FGeAwtkWzOpmGB5EaQOcVjca43cwzuqWc0v4mDGVCifDsJ2oNs9oCMSt26zZA+ZkQxtMDzGuo50KlL/AA0ppWolfjyumIeBcyKxyMCwABiQCRoPSin7P+KXcRddGd2Vbcw7AwQYBACgk7bmt3H8fw13DuVZdFMALLAkaQtZWA7Pvg7P7Smf4jJmZSV7siSugErPKmTTjtEmt2EvE8Jc+BCOouZgVcqJWdCBvAgkddawuKdlGxKEhUsy4cuwlnYLlhQGEJz136c6oY/tzcClBaUusLnJIXMQO9k3O40kU/De3VtLIF/OXVYEQRcg6Gfwt1mN60VJbRnTMSz2KxbsyqECK5TOzEAgBSHAgkqc2kcwaqcSs38GXtXUUK4AB8QZQ05lblqPWjbs/wBpjecIEyKy5k3aNdny+HY0NfaFcvvcCvbK20OVHjxmO8xPITMacqpGTbphjJx2jO4JilN228xDBT5g6b+9GnC3g3EnwOQP5WAZfrHtXPsNgmFtm07mpE6lTzHLStLg3HGz5nGhVUzbTlmCddTrE+VJKDkm0djzKVW9hZxHiKJpnytBgASdulZacTfuk/E8yBr6kRrU74NHf4pkmIAnSvKYtS+X4L9JIOX61KNUM7NPC8RR5VSZXcEEET5GrF/EZUC83dR7DU/SspbCW3ZxMsNdTyqTAXEuFmcjKiMBJ3Y9PQfWshZS4x2GI+HbwyuFUkGU578qA+L4r4l4uAFk7DTatXgWJd0ykjKmirWRxVYu7R3q6aqCOHFLlmb/AKDLsmv36en6V0QUAdlF++T0/Sj+hg6LeR9l/g9KlSq5AU01PTGsYU09NTK01jDXdjTqNK83z3TXtdqF7CKaVPSogPnrtLxF3ItG6XRCQAdzylj+Jo0mtTF3rb2LeJtv94AiC2SJDIYgdNpoUtYJ3UmCF1gnmeh56614wKOjnuxv6yRp7aVB0U/HPWuza49i8RdOfPA6AAZdNQD/AHrEtYW2VObV/lGuu+5ou4Pwd7tl2PdIYjLrmI5EjpWLiuEsWCQGZvDlknpDaVFTp0Vljpb7C/Cdn8KLNshA2a3BcE5iSBMwdfSOVSL2iQ2nQOM6AoEZu8coAmOe9CZ4RewqHOHQushleICzIcDrOkefWsi9hcjhp8RyDXclZBk9abDFSmot9kpJqLaIsS5+KQZAZhA1Y6xIE89edF6dhLTgOTcVASckglhA91oTezGsmVEiIMEHfWJG9aeB7T31AQwwk66j8QJkdf716OXxWtQOWGVNWw5wVq3ggJYBYAAJBIBJPebcmhntTxq1igqK4lX3YHLEbA0O8V4zduZg7ShJAWBuCOfIbVVwagKWYS2YBI1IO5gcuVbH4VfZ7DLNr4knEbN5AEzTaYgqwGhiJUdN6l4HZW7cNsiVCMDHLoZOog7e9XXvYm4q2/h5FUyWfTNAIEjnudPpW1hnKqugOXcgAZjzPnUMmSOOLiu2UxRlKScujEfiV7DEo/eX8L9f/NV/8SPB1M9aKcRZS4vJgaw34GmbYVxxlF9o7ZRl6ZTHE7uIbIk66E9OpPSiO/wC46WltrIRWnkXdiuYnz0FecHaS0ABA8hua0L+NItDK5RlYFSD3ddIYc1+dZy3oWUfjt7Fw+1eWxkyKhVu88gOfITvWfjrdxQhuKQWYEFuY8q1OJ8WtXbHw3RlvIQQPwseZVhv11ArHx+IuPkDkkIQBPLyoqTfZbDFQxN63/0Ouyv/ABV9P0o/oD7KgfEX0/SjyrYPqc3kfZCpUqVWICpUqjY6gdaBiSorO3ufrUhqHDHT3P1oXsI+KPdNSLsKixnhNSrtQ9m9HqlSpU4DhQ4dcdMyqQshIHInwmOnnWngLItOZbOwIUkqoCyBzE66bedEWFZLea2gACiZJzEggkk9OVeFwwILW2BCmCoggNEk6a6zzrjo9bJLk0n6PeDw7sPiK4AaeWhiQIFDWIxb28XbyoB3SrAAktOpjzkaUVpcKW4MnLy00nWD86zMQiu0qF+Iu22aDvry3ig4Ny2c6+Ur9FPjjtifh2kXdwHLAwvTXnr9Kr8X7KosPbl3UCQ2gMcwORArd4dhmHjSGGkzyGu1aBSaKjTtC5OKdLo5re4HPeykEiIAmDIJImok4HCsZaTrquoI5g9a6emHLMFG5qfjPD1tYa6xhmyxPISQNB+tdj8nI41ZxvFHlZyQcJlQucyNTI3O0xXpcMqFUABI3bbffrFaly5AqlhElix5/SoS8rJJcW9DRwxi7omv6LJ1MQPevaTkFSXEkUkWNOVcxU84YqDBJWT4hqB6rz9vzrStcJuPMMgUCS4ObeYhd5PSsh1gzuKsWOKPYWUbxAqZUnLrI06x1FGKXsfk1oq21Cky0kE6kQTr05elNjXOSP3jp6UrLZhm85969umeKwrbPGMtZ0VvxKN/SK0uD41byfDde+pkxAZvQkGD9ahZdI8qzra5LmYc6IDovBcVb+OpAFsAZSCfLeaOwa42cQTrzrq/C7k2bebfIsz1yirYXWhcjb2y9TE0pqLE+FvSr2SJJrwTqPelaPdHoKzuLcTWwys2xkUG9DRi5Oktmqahw6wPc1l43jqJZ+KpDDeJ1qHjXHxYsrcyyGA9iw0pW1YzxyXaNm4M0rGnWqaWmS6WNyUy+A8j5Vm8P42VtoLwh208tfOs3tZxtLRTmzbwfw0k51tDxxSb4oKf/U06/SlQHks/54/6h/elUvzyKfxJ/ok4mqWhcWSH12G8jmeWlc/THPbuko5Q5SCRzB/Dt5Uc9syEvtrOZc3ppEVzbEN3z6D9aaDbbGyStKR1PBXD8IQc7ZQdxr0B1p+D2GQ98CZk76a7a70P9leGskO5KxqozaGdpg670Wi+v7w+ddSheziflKCcFv8As0XTU1Cy1bU5grdRUTr3vUVBqmOnaslwFmJbnsK88fBfDXV37hIHPTWrirlUDoP/ANrzd2/38qetUA45i22FT2F0r3xvC5L7qNFzFlHk2se2o9qgQx8q5WqdFUSu1PmqAPr1pw1KYhxV0qCRuNafBPKhpkHWdR6gTUd81NaICADp9daPoxbABFR2k1pK0ivSGKBj02s1Wup3galVoanvDaiY94dizLbUSznKo8zAH1rsGaIA2Fcy7G4bPis5ErbT/wCzEge8A10hJP8AeujHGlZOTLttp9qjxd0BWBPlXm1cAqnx2/8A+3uMomFJ85qknSAu9lHGY9xetKokc/SKxO1ty5fvWcMkBnJM/wAI3rzg+PK+HUp40hWJGorLdMS2PtXOgIQnQRzEedJyVHY5cUnFU0afHuz7WbOcXCQkSvKqHCeGXcTlF1z8NGDBP3hvXvtz2jvhDh/hZS8DPMg+grP4jjcSmGs5QyPoCQBB0gVOT2Z+RlkqkFPbNbX7M4YhSF7kbzyigfguGa9kS/mObRHEyPI0TcEtXrltkxK6z4jzmivDYBFUd0DLzrNWhFJxqUXsFf8ABCfvmlRrnXypUv4xv5OX9nPu2HDzaRHc99hBG5211rnFxu+fQV0X7Q+KLduBF/ANT5mubt4z6CmxpJuhJtuKs6fhnti2mY65RSRlPhSfMmsfC2nKLAA0HQVY+AebT7118zypR2w54O5aysgLBIga7bVZNuWX1rH7IoQjr0YEe4j9KIrKy3oKk+zrg/iMTXgn869OK8NrTDHMu1QK4lwfI+3X8o9qx7t8DQVtfaCMuJVv3rQ+au8/UfOhRbnOuWa2Uj0Xkepw+lUrbaVMHpKCeb5gVIcOGCnMw0A0MVDiPAfSprLaD0omLC6CJmP960zNtUJeonxIjQE/L+9CjFtmrz+0SII161T/AGg9PzFRvfPT8/pFFIwe9gVlbjHbMB6wo/vRsG5UI/Z/aYYYOwIzM5UEbqWMN6ERFFqLXXHom+yadKodoOIJaRQ6MyOcjBdTB51oATUeJurm1HhpZ9Gj2A+P7JZ0V8M7IrEMdY06RWrw/AOiKLzl2UypiCPKto4lSBk2PKq7tLr6Gpp6LKbu2D3bThd261u7b1CQSI1rawuS5aTMoMREjYir7YkxrHSq2DnL7mskrBKTaGxZGUDzFXUYERVXGJoPUVMdBRXYvomhaVQZvKlTAOW9qWnEPQm47xop7SH756FXOtJDsrPpBtgrkouYnYVbVgPCvzNR4C1KKTPhFWWSdgasjz5x2bvY7EEvcQ81BHsSP+6iy0NCfKuecGxJsXldzCzDeh0roqEZdNQdfblW9lYdEDmdfnUTjnTs8U2cHyNMOc4+0pPvLL/wup+aEfU0FodaPvtK4c7It1dVtTnAk6OVhvQZdfWucWr8VCa2PFmir1Oj1l/Hk1bR9Km0Me8e8I3pFTfBMyHgRtANU8e0qB1P61dV6FGPZ2qu0Dl9a9u9V3esjEmbTYVFiH7p9DXkvT4W0b9xLKeJzlE7c5JopbM2dm4IoFlANgqgegAAFai1m8FslLSITJRACTpMDcjlWmsD1rpRMlQ8/lWdiLkOwPUirqnWsviB+9f2I91BNCfRo9jYZ+6PcUzuQ6x51HhbkLTXrnfEVL0U9lpX61Hh5A061EHOte8Oxy6e9H2Z9Fu+TkE9RUmYH0qtiroyqOcivc6b1vYK0T92lVTP509NoU5X2kecQ/rQzfEPRH2gdTiHKkMJ0I2rLHDLlx5RC3WKSJaYecPw/wB2hk+EVa12qbA4UrbQEahRNWbilVJCEmNqrZytWBPabFGQg5b10/sirDBWAxJPwlOpnxd4fka5ji+G4m4zN8JtTO1dYwifDsonNURfkoFFBSJLtsGoHSpBeNIMDTBAH7T0vHDqbc5MwFwCZI/D6id/bzrk5zjdWHqCK732vuAWQn77Qf5Rqf0HvQPfwqx1qE5U6KwhyVgJh+pq4typnFgsT3h5FcoH/SzTUb2VdlWxLACXY5ozH8IBAIC9eZnlFZx1Yqe6R4xNzw/zL9RU8GZDc9oop4b9m92/ZS7+0IhbvBCjMIDEDv5hvE+HSprv2b4seF7Tf1OPqlBxZrBRnqu70YYX7P8AFFwt0qiGZdSHiATGWQeVNxT7OcQpHwXS4p3zdxlPmCSCPMfKsoMzkgIu3dK1+wihsak8g5Hrl0omwX2XscrXsR/MiJ+Qdj+eWjbgXZrDYSTZTKzaFixZo6SdhzgVSMaFbLWGuhAQwgadZmrSgNqpqy6SIPsRVNrbA+I1QBMrVmcRIzk8yB9AP0rRt3DzFBfabtT8DEugthoC6z/CDt71OXQ0ezSw5ke5r09zUe9Cl7tQUbKUkEZhr1qwnaNHXPkIymDr1qKbqh62E015sXCBWBa7SIdgPeRSu8cdCQiI39UHX2pr2btBRfKkKec1KTpQknHbjZi1kLlGYazJ6VWPbK9EGxp7/wBqy+zN0g1gUqB/8YP/AJP5n+1KmoFj43saUZpuA5fLpUvDuI2bC5ApJ/Eepok483eue9c9uHvmggy2g3bjSKAch1r2OMggELvQ/iVhFPUVNgb2m1Mmc8no2bnHygJyAx5milmzQfIH5ihPA8Ce+ZnKnNj9F6miq8oHdB0AA9gKYMeiF7k7CvIMbn5V7XXQVOluNz7f3NEYrXUV1KEFp5H6+VBfEcK9s5biRM5WGxHqNjGsUfNcjbL6VUxK5wVOQg8iAfypJRUh4TcT5+xyFHdZOjmPQmR+Rok4cUtWwAsEiWPU1o9pOwl57rXLTplb8JJWPQ6zVBeBYmwuVyLk7KFOn9R3+VCcW0GEkpM7LwFMuGsD/wCND81BP5mr5NYvC+I5rSQIhFBU6FSABlIq4MUelOhGWXANRGBzqpeugxI61AQv7o/KiAvkg6qQfTWmqioVTIkGpWuKd9+sUbMWVuleenrSutIkamqpkenXlTLeI2oBJ0YmpL3AsLcYs1pGfTMSJPvXnDNnYR7itZLYBJgSdz1rAZl3OzuFMH4Fv3XlUq8DwwGX4NuOmUVpU9NSBZjYns5hnQr8JVnmoAI8waHcR2GslpZ3B8iNuXKjuq2Mwy3FKn2PQ0sophUgMfstZt5QrP3zlMnlWknZi0BGZj6wf0rE4jdvWXyurwplWEkHzr3Y7RuN2J9RXPdPaLcbWmbX+GrP+4/tT1m/4nP8NKj+Rfo3FkHHG71z1agK43fPrRrxppNz1b60INYBbpTRBI1sTclEUk90fXWrXBMIbtxUXmZJ6KNz8qaxg8+kjTzrb7HWAmIYc/ht/qWnSOd/oMCgRQqiFUQBVDFE7xNXrrVVcCsOikLrbHQdBpXqPU+9V+OsVsOymGABB6HMKCbHbC6jQ6h1/wClvbkfy9aVzSdDKNh4U/hJ9YpAN+7Q5he3GGbRyyfzCB8xIrawvGsPcEpdRv6hPyplJAaLJQ84HrUTYZWPXzNThkP4h8zVlLKjvD6012YrNhY1GlQnOv8AEPzrRc1Wx2IS2j3HIVUUsSdoFKzGbhuJWbjvbW4M6GGU6EH339qushri78btM7XIfMzF9oIJM71f/wAd3kXLazE8s8MB7aml5OyjgquzrGVq8sh6Vym19oOP6Wf6kP8A2uKWJ7WY2+MrXVRTuttMntmJLfnRckhOJ0W/xZLTFS5zASQAXgecA1q4JWvIrqBkcZgxBWQeeXcfKuQ4dd99d5JM+tdm4PbyWLag7Io/KhGXJ0GUaLuDwwTUmSdPSrobWqcnlUiNBqqEZbpqYNTzRFFTRT09ExBicMriCKxL/DEmCg+VEVRXbYYedJKNjRlQNf8Ao9r9wU1bnwG6UqTgNzAPiO7+poYxe9NSpYjzNbAc6IezP/Gf+Rv9SU9Kq+jnfYWXKr3KVKlHMXtF/wAu/oP9QrlWN5+hpqVc8/sVj0Um8HtWbhfEaVKnQrDHst4q6ZwbnSpVVCmjcoZ+0X/lG/q/0NTUqxjiCVIaalSDko3rSwu1PSpZBRrYbb3rsvD/AAJ/KPoKVKhi7NPotpzpqVKugkyw2wqUUqVMKIU9KlRMKmNKlWMKlSpUDH//2Q=="
              message="Hello"
              active="-active"
            />
          </div>
        </div>
        <div className="home-right-container">
          <div className="home-right-header"></div>
          <div className="home-message-detail-container">
            <div className="home-message-detail-left">Hello</div>
            <div className="home-message-detail-right">Hi</div>
          </div>
          {openEmojiPicker && (
            <EmojiPicker
              pickerStyles={{
                position: "absolute",
                bottom: "7%",
                width: "100%",
              }}
              onEmojiClick={onEmojiClick}
            />
          )}
          <div className="home-right-message-section">
            <SmileEmojiOpener
              containerStyles={{
                position: "absolute",
                left: "3%",
                top: "28%",
              }}
              onClickHandler={toggleEmojiPicker}
            />
            <form onSubmit={(e) => messageSubmitHandler(e)}>
              <AppInput
                inputContainerStyles={{
                  float: "right",
                }}
                inputStyles={{
                  width: "87%",
                  position: "absolute",
                  right: "3%",
                  top: "15%",
                  padding: "11px",
                  borderRadius: "18px",
                  border: "none",
                }}
                placeholder="Your Message"
                value={yourMessage}
                onChange={(e) => setYourMessage(e.target.value)}
              />
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
}
