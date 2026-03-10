import React from 'react';
import { ProjectLayout, ProjectHeroExact, ProjectGrid, ProjectSplit, ProjectFullMedia, ProjectHighlight } from '../components/ProjectLayout';

function Project06() {
    return (
        <ProjectLayout 
            nextProjectLink="/project/1" 
            nextProjectTitle="골프장 통합관리 시스템" 
            nextProjectBg="bg-gradient-to-r from-[#457FF3] to-[#10182B]"
            bgColor="bg-[#F26027]"
            textColor="text-white"
        >
            <ProjectHeroExact
                title="TALKAK 랜덤 사진전송 서비스"
                subtitle="심플한 랜덤 사진 공유 소셜 서비스"
                metaItems={[
                    { label: "OVERVIEW", value: "'찍고, 보내고, 받는다'는 3단계의 핵심 행동에만 집중하여, 복잡한 기능 없이 전 세계 사람들과 가볍고 유쾌하게 일상을 공유할 수 있습니다." },
                    { label: "SCOPE", value: ["UX 설계", "UI 화면설계", "약 6개월"] }
                ]}
            />
            <ProjectFullMedia src="https://images.unsplash.com/photo-1516245834210-c4c142718e24?q=80&w=2669&auto=format&fit=crop" />
            <ProjectHighlight text="Share your moments instantly." bgColor="bg-[#F26027]" />
        </ProjectLayout>
    );
}

export default Project06;
