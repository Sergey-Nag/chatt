import React, { useEffect, useMemo, useState } from 'react';
import ListCard from 'components/Lists/ListCard/ListCard';
import useListenFirebaseData from 'hooks/useListenFirebaseData';
import DB from 'helpers/Database';

export default function ChatCard({chatId, nickname}) {
  const [chat] = useListenFirebaseData(`chatsMeta/${chatId}`);
  const [chatImg, setChatImg] = useState(null);
  const [msgFrom, msgText, msgTmp, companionNick] = useMemo(() => {
    const getCompanionNick = ch => ch?.chatBetween.find(nick => nick !== nickname) ?? nickname;
    return [
      chat?.lastMessage.from || getCompanionNick(chat),
      chat?.lastMessage.text,
      chat?.lastMessage.timestamp ?? chat?.createdAt,
      getCompanionNick(chat)
    ]
  }, [chat, nickname]);

  useEffect(() => {
    (async () => {
      const photo = await DB.getData(`users/${companionNick}/photoURL`);
      setChatImg(photo);
    })();
  }, [companionNick]);
  return (
    <>
      { chat && (
        <ListCard
          text={msgText || msgFrom}
          time={msgTmp}
          link={chatId}
          title={msgFrom}
          photo={chatImg ?? ''}
          />
      )}
    </>
  )
}
