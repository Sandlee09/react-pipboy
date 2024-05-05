import React, { useEffect, useState } from 'react';
import { Terminal, useEventQueue, textLine, textWord, commandWord } from 'crt-terminal';

const bannerText = `Welcome to Vault-Tec's Google Hacking Termninal`;

export default function TerminalScreen() {
  const eventQueue = useEventQueue();
  const { print } = eventQueue.handlers;


  const handleCommand = (command) => {
    print([
      textLine({
        words: [
          textWord({ characters: 'You entered command: ' }),
          commandWord({ characters: command, prompt: '>' }),
        ],
      }),
    ]);
  };


  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Terminal
        printer={{
          printerSpeed: 50,
          charactersPerTick: 1
        }}
        maxHistoryCommands={5}
        pixels={false}
        queue={eventQueue}
        banner={[textLine({ words: [textWord({ characters: bannerText })] })]}
        onCommand={handleCommand}
      />
    </div>
  );
}
