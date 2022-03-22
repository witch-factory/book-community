import React from 'react';
import { nanoid } from 'nanoid';
import VerticalContainer from '../../common/VerticalContainer';
import SearchBox from '../../common/SearchBox';
import carrot from '../../image/carrot.jpg';
import HorizontalContainer from '../../common/HorizontalContainer';
import StarRate from '../../common/StarRate';
import { CenterContainer } from './styles';
import CommonPageLayout from '../../layout/CommonPageLayout';

function BookCoverImage({ coverImg }) {
  return <img width="300" src={coverImg} alt="Book cover" />;
}

function BookInfoBox({ bookTitle, coverImg, bookStarRate = 3 }) {
  return (
    <VerticalContainer>
      <HorizontalContainer>
        <BookCoverImage coverImg={coverImg} />
        <VerticalContainer>
          <h1>{bookTitle}</h1>
          <StarRate givenRate={bookStarRate} readOnly />
          <p>
            책을 쓴 작가
            책 출판사
            발행년도 등등 책 관련 정보
          </p>
        </VerticalContainer>
      </HorizontalContainer>
      <p>
        건강한 마음으로 아이들을 돌보는

        모든 곰 선생님에게 보내는 응원!

        낯선 선생님에게 마음을 열어 가는 과정을 담은『당근 유치원』.
        아기 토끼가 새 유치원에 가서 몸집도 목소리도 크고,
        힘도 장사인 곰 선생님을 만나 점차 선생님과 마음을 나누며 유치원에 적응해 가는 과정을 그렸다.
        작가는 아이들이 공감할 수 있는 현실적인 유치원 배경과 생활 모습을 그리면서도
        동화적인 따스함이 어려 있는 특별한 공간을 만들어 냈다.
        유년의 아이들이 낯선 환경에 적응하려는 노력을 응원할 뿐 아니라
        매일 건강한 마음으로 아이들을 돌보는 교사들까지 위로한다.

        아기 토끼가 새 유치원에 갑니다.
        설레는 마음으로 만난 담임 선생님은 덩치가 산처럼 크고
        목소리가 쩌렁쩌렁한데다가 힘도 장사인 곰 선생님!
        아기 토끼는 선생님과 친구들이 낯설기만 합니다.
        아기 토끼가 새 유치원에 적응하고 즐겁게 생활할 수 있을까요?
        https://book.naver.com/bookdb/book_detail.naver?bid=16355702
        여기서 아무거나 가져온 책 소개입니다.
        책 줄거리를 적는 부분입니다.
      </p>
    </VerticalContainer>
  );
}

const bookReviewList = [
  {
    title: '좋은 책이었다',
    author: '김성현',
    content: '재밌게 읽었다',
  },
  {
    title: '좋은 책이었다',
    author: '김성현',
    content: '재밌게 읽었다',
  },
];

function BookReviewItem({ review }) {
  return (
    <>
      <HorizontalContainer>
        <h2>{review.title}</h2>
        <h3>{review.author}</h3>
      </HorizontalContainer>
      <p>{review.content}</p>
    </>
  );
}

function BookReviewBox({ reviewList }) {
  return (
    <>
      <h1>
        리뷰 총
        {reviewList.length}
        개
      </h1>
      {
        reviewList.map((review) => <BookReviewItem key={nanoid()} review={review} />)
      }
    </>
  );
}

function BookInfoPage() {
  return (
    <CommonPageLayout>
      <CenterContainer>
        <SearchBox />
      </CenterContainer>
      <BookInfoBox bookTitle="당근 유치원" coverImg={carrot} />
      <BookReviewBox reviewList={bookReviewList} />
    </CommonPageLayout>
  );
}

export default BookInfoPage;
