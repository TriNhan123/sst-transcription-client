import React, { useRef, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { API, Storage } from "aws-amplify";
import { onError } from "../libs/errorLib";

export default function Audio() {
  const file = useRef(null);
  const { id } = useParams();
  const history = useHistory();
  const [audio, setAudio] = useState(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    function loadAudio() {
      return API.get("audio", `/audio/${id}`);
    }

    async function onLoad() {
      try {
        const audio = await loadAudio();
        const { content, attachment } = audio;

        if (attachment) {
          audio.attachmentURL = await Storage.vault.get(attachment);
        }

        setContent(content);
        setAudio(audio);
      } catch (e) {
        onError(e);
      }
    }

    onLoad();
  }, [id]);

  return (
    <div className="Audio"></div>
  );
}