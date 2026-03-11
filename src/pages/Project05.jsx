import React from 'react';
import { ProjectLayout, ProjectHeroExact, ProjectGrid, ProjectSplit, ProjectFullMedia, ProjectHighlight } from '../components/ProjectLayout';

function Project05() {
    return (
        <ProjectLayout
            nextProjectLink="/project/6"
            nextProjectTitle="TALKAK 랜덤 사진전송 서비스"
            nextProjectBg="bg-gradient-to-r from-[#FD723B] to-[#F26027]"
            nextProjectDesc="'찍고, 보내고, 받는다'는 3단계의 핵심 행동에만 집중하여, \n복잡한 기능 없이 전 세계 사람들과 가볍고 유쾌하게 일상을 공유할 수 있는 심플한 랜덤 사진 공유 소셜 서비스"
            bgColor="bg-[#263044]"
            textColor="text-white"
        >
            {/* 01 - 메인 제목과 오버뷰 내용이 적혀있음 (OVERVIEW, SCOPE) */}
            <ProjectHeroExact
                title="충전결제 서비스 PAYIS"
                subtitle="선불형 간편 결제 앱(App) 구축 프로젝트"
                metaItems={[
                    { label: "OVERVIEW", value: "번거로운 카드 등록 절차 없이 필요한 만큼만 충전하여 사용하는 방식을 채택해, 개인정보 보호와 직관적인 결제 경험을 동시에 확보했습니다." },
                    { label: "SCOPE", value: ["UX 설계", "UI 화면설계", "약 6개월"] }
                ]}
            />

            {/* 02 - 전체 화면을 채우는 풀사이즈 메인 이미지 영역 */}
            <ProjectFullMedia src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2670&auto=format&fit=crop" />

            {/* 03 - 화면 전체 너비로 배색된 큰 텍스트 강조(Highlight) 영역 */}
            <ProjectHighlight text="Secure & fast payments." bgColor="bg-[#263044]" />
        </ProjectLayout>
    );
}

export default Project05;
