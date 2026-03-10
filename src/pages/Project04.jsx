import React from 'react';
import { ProjectLayout, ProjectHeroExact, ProjectGrid, ProjectSplit, ProjectFullMedia, ProjectHighlight } from '../components/ProjectLayout';

function Project04() {
    return (
        <ProjectLayout 
            nextProjectLink="/project/5" 
            nextProjectTitle="충전결제 서비스 PAYIS" 
            nextProjectBg="bg-gradient-to-r from-[#0073FF] to-[#263044]"
            bgColor="bg-[#9F2152]"
            textColor="text-white"
        >
            <ProjectHeroExact
                title="골프와 선물하기 연계서비스"
                subtitle="골프 앱 내 커머스 UX 전략 및 설계"
                metaItems={[
                    { label: "OVERVIEW", value: "관계 기반의 리마인드 알림과 맞춤형 큐레이션을 통해 유저 간 소셜 네트워킹을 활성화하고, 구매 프로세스를 단축해 전환율을 극대화했습니다." },
                    { label: "SCOPE", value: ["UX 설계", "UI 화면설계", "약 4개월"] }
                ]}
            />
            <ProjectFullMedia src="https://images.unsplash.com/photo-1518316279930-97435f29f0ce?q=80&w=2670&auto=format&fit=crop" />
            <ProjectHighlight text="Connecting people seamlessly." bgColor="bg-[#9F2152]" />
        </ProjectLayout>
    );
}

export default Project04;
