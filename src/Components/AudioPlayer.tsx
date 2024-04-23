import React, { useEffect, useRef, useState } from 'react';
import { PiPause, PiPlay } from 'react-icons/pi';
import tracks from '@/db/tracks';
import WavesurferPlayer, { useWavesurfer } from '@wavesurfer/react';

const AudioPlayer = ({ index }: { index: number }) => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [time, setTime] = useState<{ min: string; sec: string }>({ min: '00', sec: '00' });
  const [ws, setWs] = useState<any>();
  const trackData = tracks[index];
  const duration = (ws && ws.getDuration()) || 0;
  const durationMin = Math.floor(duration / 60);
  const durationSec = Math.floor(duration - durationMin * 60);
  const durationPrint = {
    min: durationMin < 10 ? '0' + durationMin.toString() : durationMin.toString(),
    sec: durationSec < 10 ? '0' + durationSec.toString() : durationSec.toString(),
  };
  const onReady = (wsa: any) => {
    setWs(wsa);
    setPlaying(false);
  };

  const PlayNPause = () => {
    ws && ws.playPause();
    setPlaying((s) => !s);
  };

  return (
    <div className="my-8 flex w-full gap-5 flex-1 items-center">
      <button
        onClick={PlayNPause}
        type="button"
        className="w-12 h-12 btn-prim grid place-items-center "
      >
        {!playing ? <PiPlay /> : <PiPause />}
      </button>
      <div className="flex-1 cursor-pointer h-16">
        <WavesurferPlayer
          height={64}
          barGap={3}
          barWidth={2}
          dragToSeek
          onReady={onReady}
          progressColor={'#F7F6BB'}
          url={trackData.trackUrl}
          cursorColor={'#87A922'}
          cursorWidth={3}
          onClick={(e) => {
            const ctime = e.getCurrentTime();
            const min = Math.floor(ctime / 60);
            const sec = Math.floor(ctime - min * 60);
            setTime({
              min: min < 10 ? '0' + min.toString() : min.toString(),
              sec: sec < 10 ? '0' + sec.toString() : sec.toString(),
            });
          }}
          onAudioprocess={(e) => {
            const ctime = e.getCurrentTime();
            const min = Math.floor(ctime / 60);
            const sec = Math.floor(ctime - min * 60);
            setTime({
              min: min < 10 ? '0' + min.toString() : min.toString(),
              sec: sec < 10 ? '0' + sec.toString() : sec.toString(),
            });
          }}
        ></WavesurferPlayer>
      </div>
      <div className="flex flex-col">
        <p className="text-white text-sm">
          {time.min}:{time.sec}
        </p>
        <p className="text-terenary text-sm">
          {durationPrint.min}:{durationPrint.sec}
        </p>
      </div>
    </div>
  );
};

export default AudioPlayer;
