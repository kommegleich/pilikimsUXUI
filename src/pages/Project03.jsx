import React from 'react';
import { ProjectLayout, ProjectHeroExact, ProjectGrid, ProjectSplit, ProjectFullMedia, ProjectHighlight } from '../components/ProjectLayout';

function Project03() {
    return (
        <ProjectLayout 
            nextProjectLink="/project/4" 
            nextProjectTitle="골프와 선물하기 연계서비스" 
            nextProjectBg="bg-gradient-to-r from-[#F43DE5] to-[#9F2152]"
            bgColor="bg-black"
            textColor="text-white"
        >
            <ProjectHeroExact
                title="스코어를 게이밍하다"
                subtitle="스마트스코어 프리미엄 멤버십 전용 서비스"
                metaItems={[
                    { label: "OVERVIEW", value: "단순한 점수 기록을 넘어 방대한 스코어 데이터를 기반으로 유저의 플레이 패턴을 분석하고 감성적인 스토리로 풀어낸, 초개인화 리포트 서비스입니다." },
                    { label: "SCOPE", value: ["UX 설계", "UI 화면설계", "약 2개월"] }
                ]}
            />
            <ProjectFullMedia src="https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=2574&auto=format&fit=crop" />
            <ProjectHighlight text="Data driven golf experience." bgColor="bg-[#10182B]" />
        </ProjectLayout>
    );
}

export default Project03;
