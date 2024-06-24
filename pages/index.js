import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Countdown from "react-countdown";
import Modal from "react-modal";
import { useRouter } from 'next/router';

// INTERNAL IMPORT
import { VotingContext } from "../context/Voter";
import Style from "../styles/index.module.css";
import Card from "../components/card/card";
import image from "../candidate.png";
import Footer from "../components/Footer/Footer";

const Index = () => {
  const {
    getNewCandidate,
    candidateArray,
    giveVote,
    getAllVoterData,
    currentAccount,
    candidateLength,
    voterLength,
  } = useContext(VotingContext);

  const [showPopup, setShowPopup] = useState(false);
  const [winner, setWinner] = useState(null);
  const router = useRouter();

  useEffect(() => {
    getNewCandidate();
    getAllVoterData();
  }, [currentAccount]);

  const determineWinner = () => {
    if (candidateArray.length > 0) {
      const winnerCandidate = candidateArray.reduce((max, candidate) =>
        candidate.totalVote > max.totalVote ? candidate : max
      );
      setWinner(winnerCandidate);
      setShowPopup(true);
    }
  };

  const navigateTo = (path) => {
    router.push(path);
  };

  const closeModal = () => {
    setShowPopup(false);
  };

  const handleVote = (candidateId) => {
    giveVote(candidateId);

    // After giving vote, trigger share functionality
    const votedCandidate = candidateArray.find(candidate => candidate.id === candidateId);
    if (votedCandidate) {
      const shareText = `I just voted for ${votedCandidate.name} in the decentralized voting app!`;
      const shareUrl = 'http://localhost:3000';  // Replace with your app URL
      const shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
      window.open(shareLink, '_blank');
    }
  };

  return (
    <div className={Style.home}>
      <div className={Style.topSection}>
        <div className={Style.textContainer}>
          <h2> Decentralized Voting </h2>
          <h1>Empower Your Vote!</h1>
          <p>
            Now you can elect your candidate through this Decentralized voting Dapp
          </p>

          <div className={Style.buttonContainer}>
            <button onClick={() => navigateTo('/candidate-regisration')}> Candidate ➜ </button>
            <button onClick={() => navigateTo('/allowed-voters')}> Voter ➜</button>
          </div>
        </div>
        <div className={Style.imageContainer}>
          <Image src="/hero.png" alt="Candidate Image" height={500} width={550} />
        </div>
      </div>

      {currentAccount && (
        <>
          <div className={Style.winner}>
            <div className={Style.winner_info}>
              <div className={Style.candidate_list}>
                <p>
                  No Candidate:<span>{candidateLength}</span>
                </p>
              </div>
              <div className={Style.candidate_list}>
                <p>
                  No Voter:<span>{voterLength}</span>
                </p>
              </div>
            </div>
            <div className={Style.winner_message}>
              <small>
                <Countdown
                  date={Date.now() + 1000000}
                  onComplete={determineWinner}
                />
              </small>
            </div>
          </div>

          <Card candidateArray={candidateArray} giveVote={handleVote} />
        </>
      )}

      {showPopup && winner && (
        <Modal
          isOpen={showPopup}
          onRequestClose={closeModal}
          contentLabel="Winner Announcement"
          className={Style.modal}
          overlayClassName={Style.overlay}
        >
          <h2>Congratulations!</h2>
          <p>The winner is {winner.name} with {winner.totalVote} votes!</p>
          <button onClick={closeModal}>Close</button>
        </Modal>
      )}

      <div className={Style.whyVoteSection}>
        <div className={Style.whyVoteImage}>
          <Image src="/whyVoteImage.png" alt="Why Vote Image" height={450} width={450} />
        </div>
        <div className={Style.whyVoteContent}>
          <div className={Style.whyVoteContent_up}>
            <h2>Why Vote?</h2>
            <p>
              Voting is a fundamental civic duty that empowers individuals to influence government decisions and policies.
            </p>
            <a onClick={() => navigateTo('/allowed-voters')}>Check Voters ➜</a>
          </div>


          <div className={Style.whyVoteContent_down}>
            <h3>Power of Your Vote</h3>
            <p>
              By casting your vote, you contribute to the democratic process, ensuring that your voice and the collective will of the people are heard.
            </p>
            <a onClick={() => navigateTo('/candidate-regisration')}>Check Candidates ➜</a>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Index;
