import React from 'react';
import { ProjectLayout, ProjectHeroExact } from '../components/ProjectLayout';

import imgBg1 from '../images/project6-bg1.png';
import imgBg2 from '../images/project6-bg2.png';
import imgBg3 from '../images/project6-bg3.png';
import imgFc from '../images/project6-fc.png';
import imgLg1 from '../images/project6-lg1.png';
import imgLg2 from '../images/project6-lg2.png';
import imgM1 from '../images/project6-m1.png';
import imgM2 from '../images/project6-m2.png';
import imgT from '../images/project6-t.png';

function Project06() {
    return (
        <ProjectLayout
            nextProjectLink="/project/1"
            nextProjectTitle="골프장 통합관리 시스템"
            nextProjectBg="bg-gradient-to-r from-[#457FF3] to-[#10182B]"
            nextProjectDesc="골퍼의 입장부터 결제, 퇴장까지의 전 과정을 아우르며,\n파편화된 기존 관리 시스템의 UI를 표준화하여 실무자의 업무 효율을 극대화한 골프장 B2B 통합 ERP 시스템 설계 프로젝트"
            bgColor="bg-[#F26027]"
            textColor="text-white"
        >
            {/* A - HeroExact 유지 */}
            <ProjectHeroExact
                title="TALKAK 랜덤 사진전송 서비스"
                subtitle="심플한 랜덤 사진 공유 소셜 서비스"
                metaItems={[
                    { label: "OVERVIEW", value: "'찍고, 보내고, 받는다'는 3단계의 핵심 행동에만 집중하여, 복잡한 기능 없이 전 세계 사람들과 가볍고 유쾌하게 일상을 공유할 수 있습니다." },
                    { label: "SCOPE", value: ["UX 설계", "UI 화면설계", "약 6개월"] }
                ]}
            />

            {/* B - 히어로 비주얼 섹션 */}
            <section className="relative w-full bg-[#F26027] min-h-[80vh] flex items-center overflow-hidden">
                {/* bg3 장식 레이어 */}
                <img src={imgBg3} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none select-none" />

                <div className="relative z-10 w-full flex flex-col md:flex-row items-stretch min-h-[80vh]">
                    {/* 좌측: 텍스트 + 인물 */}
                    <div className="relative flex-1 flex flex-col justify-center px-8 md:px-16 pt-16 pb-[220px] md:py-20">
                        <p className="text-[clamp(1.8rem,4.5vw,4rem)] font-semibold italic text-white leading-tight mb-4 md:mb-6">
                            "세상 사람들은<br />뭘하며 살까?"
                        </p>
                        <p className="text-[13px] md:text-base text-white/70 max-w-xs md:max-w-sm leading-relaxed">
                            탈칵! 찍고 보내면 날아오는 심플한 사진 랜덤공유 서비스
                        </p>
                        {/* 인물 이미지 - 좌하단 absolute */}
                        <div className="absolute bottom-0 left-4 md:left-6 w-[180px] md:w-[240px] lg:w-[300px] select-none pointer-events-none">
                            <img src={imgM2} alt="person" className="w-full object-contain object-bottom" />
                        </div>
                    </div>

                    {/* 우측: 폰 목업 */}
                    <div className="flex-1 flex items-center justify-center px-6 md:px-8 py-10 md:py-16">
                        <img src={imgM1} alt="TALKAK 앱 목업" className="w-full max-w-[380px] md:max-w-none object-contain" />
                    </div>
                </div>
            </section>

            {/* C - SO SIMPLE 섹션 */}
            <section className="relative w-full flex items-center justify-center py-24 md:py-32 overflow-hidden">
                <img src={imgBg1} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 w-full flex items-center justify-center px-6">
                    <img src={imgT} alt="SO SIMPLE" className="w-[85%] md:w-[70%] max-w-[900px] object-contain" />
                </div>
            </section>

            {/* D - 개요 + 로고 split 섹션 */}
            <section className="w-full flex flex-col md:flex-row">
                {/* 좌측: 흰 배경 */}
                <div className="flex-1 bg-white px-8 md:px-16 py-16 md:py-24 flex flex-col gap-10">
                    {/* OVERVIEW */}
                    <div className="flex flex-col gap-3">
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#121212]">Overview</p>
                        <p className="text-[13px] md:text-sm text-[#444] leading-relaxed">
                            "세상 사람들은 뭘 하며 살까?" 라는 질문에서 시작하게 된 심플한 랜덤 사진공유 서비스.<br />
                            찍고싶은 순간을 포착 전송하면 전세계 어딘가 날아가는 내 사진.<br />
                            그리고 받게되는 세계 어디선가 날아오는 한 장의 사진.<br />
                            조금은 지루할 수 있는 일상에 작은 재미를 더하다
                        </p>
                    </div>

                    {/* KEYWORD */}
                    <div className="flex flex-col gap-3">
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#121212]">Keyword</p>
                        <div className="flex flex-wrap gap-2">
                            {['SIMPLE', 'FOCUS', 'NO STRESS'].map(kw => (
                                <span key={kw} className="px-4 py-1.5 border border-[#121212] text-[#121212] text-[11px] font-bold uppercase tracking-wider">
                                    {kw}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* COLOR */}
                    <div className="flex flex-col gap-3">
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#121212]">Color</p>
                        <div className="flex flex-wrap gap-4">
                            {[
                                { bg: '#FF713C', border: false, label: '#FF713C' },
                                { bg: '#121212', border: false, label: '#121212' },
                                { bg: '#FFFFFF', border: true,  label: '#FFFFFF' },
                            ].map(({ bg, border, label }) => (
                                <div key={label} className="flex items-center gap-2">
                                    <div
                                        className="w-10 h-10 rounded-sm flex-shrink-0"
                                        style={{ backgroundColor: bg, border: border ? '1px solid #121212' : 'none' }}
                                    />
                                    <span className="text-[11px] font-mono text-[#444]">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 우측: 오렌지 배경 */}
                <div className="flex-1 bg-[#F26027] px-8 md:px-16 py-16 md:py-24 flex flex-col gap-8">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">Logo System</p>

                    {/* 메인 로고 (lg2 - 흰 아웃라인) */}
                    <div className="flex-1 flex items-center">
                        <img src={imgLg2} alt="TALKAK 로고 아웃라인" className="w-full max-w-[360px] object-contain" />
                    </div>

                    <p className="text-[12px] md:text-sm text-white/70 leading-relaxed">
                        "탈칵" 사진 찍을때 소리에서 따온 의성어를 직선 타이포로 표현
                    </p>

                    {/* 로고 변형 2종 */}
                    <div className="flex items-center gap-6">
                        <img src={imgLg2} alt="TALKAK 아웃라인" className="w-[120px] md:w-[140px] object-contain" />
                        <img src={imgLg1} alt="TALKAK 앱 아이콘" className="w-[72px] md:w-[88px] object-contain rounded-2xl" />
                    </div>
                </div>
            </section>

            {/* E - 플로우차트 섹션 */}
            <section className="relative w-full py-16 md:py-28 overflow-hidden">
                <img src={imgBg2} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/55" />
                <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white mb-10 md:mb-16">Flow Chart</p>
                    <div className="flex justify-center">
                        <img src={imgFc} alt="TALKAK 플로우차트" className="w-full max-w-[900px] object-contain" />
                    </div>
                </div>
            </section>
        </ProjectLayout>
    );
}

export default Project06;
