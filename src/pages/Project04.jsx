import React from 'react';
import { ProjectLayout, ProjectHeroExact, ProjectGrid, ProjectSplit, ProjectFullMedia, ProjectHighlight } from '../components/ProjectLayout';

function Project04() {
    return (
        <ProjectLayout
            nextProjectLink="/project/5"
            nextProjectTitle="충전결제 서비스 PAYIS"
            nextProjectBg="bg-gradient-to-r from-[#0073FF] to-[#263044]"
            nextProjectDesc="번거로운 카드 등록 절차 없이 필요한 만큼만 충전하여 사용하는 방식을 채택해, \n개인정보 보호와 직관적인 결제 경험을 동시에 확보한 선불형 간편 결제 앱(App) 구축 프로젝트"
            bgColor="bg-[#9F2152]"
            textColor="text-white"
        >
            {/* 01 - 메인 제목과 오버뷰 내용이 적혀있음 (OVERVIEW, SCOPE) */}
            <ProjectHeroExact
                title="골프와 선물하기 연계서비스"
                subtitle="골프 앱 내 커머스 UX 전략 및 설계"
                metaItems={[
                    { label: "OVERVIEW", value: "관계 기반의 리마인드 알림과맞춤형 큐레이션을 통해 유저 간 소셜 네트워킹을 활성화하고, 구매 프로세스를 단축해 전환율을 극대화했습니다." },
                    { label: "SCOPE", value: ["UX 설계", "UI 화면설계", "약 4개월"] }
                ]}
            />

            {/* 02 - 전체 화면을 채우는 풀사이즈 메인 이미지 영역 */}
            <ProjectFullMedia src="https://images.unsplash.com/photo-1518316279930-97435f29f0ce?q=80&w=2670&auto=format&fit=crop" />

            {/* 03 - 화면 전체 너비로 배색된 큰 텍스트 강조(Highlight) 영역 */}
            <ProjectHighlight text="Connecting people seamlessly." bgColor="bg-[#9F2152]" />
        </ProjectLayout>
    );
}

export default Project04;
