import React from 'react';
import { ProjectLayout, ProjectHeroExact, ProjectGrid, ProjectSplit, ProjectFullMedia, ProjectHighlight } from '../components/ProjectLayout';

function Project05() {
    return (
        <ProjectLayout nextProjectLink="/project/6" nextProjectTitle="TALKAK" nextProjectBg="bg-[#263044]">
            <ProjectHeroExact
                title="충전결제 서비스 PAYIS"
                subtitle="선불형 간편 결제 앱(App) 구축 프로젝트"
                metaItems={[
                    { label: "OVERVIEW", value: "번거로운 카드 등록 절차 없이 필요한 만큼만 충전하여 사용하는 방식을 채택해, 개인정보 보호와 직관적인 결제 경험을 동시에 확보했습니다." },
                    { label: "SCOPE", value: ["UX 설계", "UI 화면설계", "약 6개월"] }
                ]}
            />
            <ProjectFullMedia src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2670&auto=format&fit=crop" />
            <ProjectHighlight text="Secure & fast payments." bgColor="bg-[#263044]" />
        </ProjectLayout>
    );
}

export default Project05;
