import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useAppContext } from "../libs/contextLib";
import { onError } from "../libs/errorLib";
import "./Home.css";
import { API } from "aws-amplify";
import { BsFillMicFill } from "react-icons/bs";
import { LinkContainer } from "react-router-bootstrap";

export default function Home() {
  const [audio, setAudio] = useState([]);
  const { isAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function onLoad() {
      if (!isAuthenticated) {
        return;
      }
  
      try {
        const audio = await loadAudio();
        setAudio(audio);
      } catch (e) {
        onError(e);
      }
  
      setIsLoading(false);
    }
  
    onLoad();
  }, [isAuthenticated]);
  
  function loadAudio() {
    return API.get("audio", "/audio");
  }

  function renderAudioList(audio) {
    return (
      <>
        <LinkContainer to="/audio/new">
          <ListGroup.Item action className="py-3 text-nowrap text-truncate">
            <BsFillMicFill size={17} />
            <span className="ml-2 font-weight-bold">Upload a new audio</span>
          </ListGroup.Item>
        </LinkContainer>
        {audio.map(({ audioId, content, createdAt }) => (
          <LinkContainer key={audioId} to={`/audio/${audioId}`}>
            <ListGroup.Item action>
              <span className="font-weight-bold">
                {content.trim().split("\n")[0]}
              </span>
              <br />
              <span className="text-muted">
                Created: {new Date(createdAt).toLocaleString()}
              </span>
            </ListGroup.Item>
          </LinkContainer>
        ))}
      </>
    );
  }

  function renderLander() {
    return (
      <div className="lander">
        <h1>Scratch</h1>
        <p className="text-muted">Audio - Transcription</p>
      </div>
    );
  }

  function renderAudio() {
    return (
      <div className="audio">
        <h2 className="pb-3 mt-4 mb-3 border-bottom">Your Audio</h2>
        <ListGroup>{!isLoading && renderAudioList(audio)}</ListGroup>
      </div>
    );
  }

  return (
    <div className="Home">
      {isAuthenticated ? renderAudio() : renderLander()}
    </div>
  );
}