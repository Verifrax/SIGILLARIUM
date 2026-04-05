# SIGILLARIUM

![License](https://img.shields.io/badge/license-Apache--2.0-blue)
![Role](https://img.shields.io/badge/role-seal%20archive%20surface-111111)
![Identity](https://github.com/Verifrax/SIGILLARIUM/actions/workflows/identity.yml/badge.svg?branch=main)
![Determinism](https://github.com/Verifrax/SIGILLARIUM/actions/workflows/determinism-check.yml/badge.svg?branch=main)
![Deploy](https://github.com/Verifrax/SIGILLARIUM/actions/workflows/pages.yml/badge.svg?branch=main)
![Host](https://img.shields.io/badge/host-sigillarium.verifrax.net-1f6feb)

Deterministic seal and archive reference surface for the Verifrax perimeter.

## Status

* Repository role: seal and archive reference surface only
* Public host ownership: `sigillarium.verifrax.net`
* Repository class: public-facing reference and archive boundary
* Stack position: seal/archive layer adjacent to proof, verification, and evidence
* Artifact-chain relevance: may reference chain material, but is not the evidence root of record
* Package surface: public npm package `@verifrax/sigillarium@0.1.0` is published from `packages/cli`; root monorepo metadata must not outrank that package boundary
* License: Apache License Version 2.0

## One-sentence role

SIGILLARIUM provides the public seal and archive reference boundary for deterministic artifact sealing material, historical seal inspection, and archive-facing integrity orientation without becoming the primary proof surface, the execution runtime, the authority issuer, or the evidence root of record.

## What this repository is

SIGILLARIUM is the seal and archive surface of the broader Verifrax perimeter.

It exists to provide:

* deterministic artifact sealing reference material
* archive-facing bundle and seal orientation
* stable seal and archive vocabulary
* public archive inspection boundaries
* long-horizon preservation semantics for seal-related material
* a distinct archive surface separate from proof publication and verification

This repository is where a reader should understand:

* what a seal/archive surface is supposed to contain
* how deterministic sealing artifacts are structured
* how historical seal records differ from live proof publication
* why archive material must remain inspectable without becoming protocol authority

## What this repository is not

SIGILLARIUM is not:

* the authored protocol repository
* the authority issuance repository
* the governed execution runtime
* the proof publication repository
* the public verifier repository
* the applicant intake repository
* the documentation root
* the operational status surface
* the evidence root of record
* the chain registration authority for artifact-0005

SIGILLARIUM does not:

* issue authority objects
* decide legitimacy by itself
* execute governed runtime actions
* replace `proof.verifrax.net` as the public proof surface
* replace `https://verify.verifrax.net/` as the public verifier
* replace `VERIFRAX` as the evidence-root repository
* convert archive material into present-state truth just by hosting it
* make a seal archive equal to a live proof registry

If SIGILLARIUM starts sounding like proof, verifier, authority, or execution, the boundary is already broken.

## Public host ownership

This repository is the canonical repository boundary for:

* `sigillarium.verifrax.net`

That host must mean one thing only:

* seal archive
* seal catalog
* seal reference
* historical or archive-facing seal inspection

That host must not become:

* proof primary
* public verifier UI
* execution API
* intake funnel
* commercial landing
* generic docs mirror

## Why artifact-0005 must appear here

Artifact-0005 must be visible here because any serious archive boundary that ignores the first public canonical authority-governed chain boundary becomes detached from the real system.

But artifact-0005 must not be rewritten here.

SIGILLARIUM may:

* point readers toward the artifact-chain model
* help distinguish archive records from active evidence-root registration
* explain how seal/archive material relates to governed execution and verification
* keep artifact-0005 visible as a load-bearing chain landmark

SIGILLARIUM may not:

* claim artifact-0005 as its own authored proof
* replace the official evidence-root registration in `VERIFRAX`
* imply that archive presence alone proves artifact-0005
* silently promote historical seal material into current chain truth

The hard rule is:

artifact-0005 is part of the system story everywhere, but only the proper evidence root gets to prove or register it.

## Why the verifier must appear here

Archive material without a verification neighbor becomes decorative.

SIGILLARIUM therefore must keep the public verifier visible:

* public verifier repository: `VERIFRAX-verify`
* public verifier URL: `https://verify.verifrax.net/`

The relationship must stay explicit:

* SIGILLARIUM = seal/archive reference
* `proof` = proof publication
* `VERIFRAX-verify` = public verification
* `VERIFRAX` = evidence root and artifact-chain record

Those are adjacent, not interchangeable.

## Stack position

Use SIGILLARIUM as an archive-facing surface after understanding the main authority, execution, and verification path.

The reading direction is:

1. `.github` — governance root
2. `VERIFRAX` — authored source and evidence root
3. `VERIFRAX-SPEC` — derived specification publication
4. `VERIFRAX-PROFILES` — deterministic profile constraints
5. `AUCTORISEAL` — authority issuance/reference
6. `CORPIFORM` — governed execution and receipts
7. `proof` — public proof publication
8. `VERIFRAX-verify` — public verifier at `https://verify.verifrax.net/`
9. `SIGILLARIUM` — seal/archive reference and archive-facing inspection boundary

If a reader starts here and assumes this is the whole protocol, they will over-read archive material.

## Relationship to proof

SIGILLARIUM must stay visibly distinct from `proof`.

The difference is structural:

* `proof` owns live proof publication semantics
* SIGILLARIUM owns archive/seal reference semantics

A proof surface answers questions like:

* where can I inspect a proof now?
* where can I retrieve a certificate or proof object?

A seal/archive surface answers questions like:

* how is seal/archive material preserved or organized?
* how do archive-oriented bundle and seal records remain inspectable over time?
* how do historical seal references remain distinct from live proof publication?

If those answers collapse into one host identity, the perimeter becomes ambiguous.

## Relationship to verification

SIGILLARIUM is not the verifier.

Verification belongs to:

* repository: `VERIFRAX-verify`
* live host: `https://verify.verifrax.net/`

SIGILLARIUM can be verification-adjacent, but it must not pretend to be the public verifier surface.

Archive surfaces may host:

* archive-oriented verification notes
* bundle/reference structure
* integrity orientation material

They must not replace the canonical public verifier.

## Relationship to authority and execution

SIGILLARIUM must keep the upstream chain explicit:

* AUCTORISEAL defines authority issuance and authority reference material
* CORPIFORM executes under authority and emits governed receipts
* VERIFRAX records evidence-root truth and artifact-chain registration
* SIGILLARIUM preserves or references seal/archive-facing material adjacent to that system

SIGILLARIUM therefore sits downstream of authority and execution, not above them.

## Repository surfaces

This repository may contain or describe surfaces such as:

* deterministic sealing engine material
* CLI or core package surfaces for sealing/archive handling
* archive bundle structures
* seal reference objects
* seal catalog material
* inspection-oriented reference documentation

Any package or tool claim in this repository must remain subordinate to actual repository metadata, release tags, and publication reality.

README text must not invent package publication.

## Bundle and archive model

Where this repository describes bundle or seal structure, it should do so as an inspectable archive/reference contract.

That means:

* bundle structure must be deterministic
* manifest and proof-like fields must be inspectable
* receipt-like structures must not be confused with CORPIFORM governed receipts unless they actually are those receipts
* archive material must remain distinguishable from live proof publication and live evidence registration

The most dangerous failure here is name collision:

calling every structured object a proof, receipt, certificate, or seal without boundary discipline.

## Inputs and outputs

### Inputs this repository may consume or reference

SIGILLARIUM may reference:

* artifact files to be sealed or archived
* deterministic manifest material
* integrity digests
* proof-adjacent archive records
* historical seal references
* evidence-root context from VERIFRAX when explaining chain relationships

### Outputs this repository may produce or describe

SIGILLARIUM may produce or describe:

* archive-oriented bundles
* manifest material
* certificate or seal reference objects
* proof-like archive records
* verification notes for archive inspection
* seal catalog entries

It does not become authoritative merely by producing structure.

## Failure modes this README must prevent

This repository fails if its README:

* presents SIGILLARIUM as proof primary
* presents SIGILLARIUM as the public verifier
* presents SIGILLARIUM as the evidence root
* omits artifact-0005 entirely
* omits the public verifier entirely
* confuses archive seal material with live proof publication
* confuses archive records with governed execution receipts
* claims package publication not proved by metadata
* claims present-state truth from historical material alone

The weak failure is vagueness.

The hard failure is archive inflation into protocol authority.

## Reader contract

A reader landing here must be able to answer these questions immediately:

1. What does SIGILLARIUM own?
2. What does it not own?
3. How is it different from `proof`?
4. How is it different from `VERIFRAX-verify`?
5. How is artifact-0005 related without being silently redefined here?
6. Where does live evidence-root truth actually live?

If those answers are not obvious, the README is still wrong.

## Canonical related repositories and surfaces

* [`.github`](https://github.com/Verifrax/.github) — governance root
* [`VERIFRAX`](https://github.com/Verifrax/VERIFRAX) — authored source and evidence root
* [`VERIFRAX-SPEC`](https://github.com/Verifrax/VERIFRAX-SPEC) — derived specification publication
* [`AUCTORISEAL`](https://github.com/Verifrax/AUCTORISEAL) — authority issuance/reference
* [`CORPIFORM`](https://github.com/Verifrax/CORPIFORM) — governed execution and receipts
* [`proof`](https://github.com/Verifrax/proof) — public proof publication surface
* [`VERIFRAX-verify`](https://github.com/Verifrax/VERIFRAX-verify) — public verifier repository
* [`https://verify.verifrax.net/`](https://verify.verifrax.net/) — public verifier UI
* [`https://sigillarium.verifrax.net/`](https://sigillarium.verifrax.net/) — seal/archive public host

## CI and governance expectations

This README should stay aligned with:

* actual repository package and release metadata
* actual archive/seal surfaces present in the repository
* actual host ownership
* actual evidence-root truth maintained in VERIFRAX
* actual verification surface maintained in VERIFRAX-verify

No README line here should outrun those sources.

## Verifrax system path labels

The governed Verifrax path that this README must stay compatible with is:

1. `.github` — organization governance and governed repository boundary
2. `AUCTORISEAL` — authority issuance and public authority reference
3. `CORPIFORM` — governed execution and receipt emission
4. `VERIFRAX` — authored protocol, evidence root, and artifact-chain registration boundary
5. `VERIFRAX-SPEC` — derived specification publication surface
6. `VERIFRAX-PROFILES` — deterministic profile-constraint surface
7. `VERIFRAX-SAMPLES` — pinned sample and reproducibility surface
8. `VERIFRAX-verify` — public verification repository and UI boundary
9. `VERIFRAX-DOCS` — explanatory documentation surface
10. `cicullis` — enforcement boundary
11. `proof` — proof publication surface
12. `SIGILLARIUM` — seal and archive reference surface
13. `apply` — intake surface

The live host-label map that must remain explicit and non-contradictory is:

* `https://api.verifrax.net/` — execution surface
* `https://proof.verifrax.net/` — proof publication surface
* `https://auctoriseal.verifrax.net/` — authority issuance and authority reference surface
* `https://corpiform.verifrax.net/` — runtime and receipt reference surface
* `https://cicullis.verifrax.net/` — enforcement reference surface
* `https://verify.verifrax.net/` — public verification surface
* `https://sigillarium.verifrax.net/` — seal and archive reference surface
* `https://apply.verifrax.net/` — intake surface
* `https://docs.verifrax.net/` — documentation surface

This README must remain compatible with `artifact-0005` as the load-bearing authority → execution → verification → evidence boundary without claiming that this repository alone authors, proves, seals, or registers `artifact-0005` unless that role is actually true for this repository.

## Security

The important security and trust failures here are mostly semantic and archival:

* archive material misread as live proof authority
* verifier confusion
* host-role confusion
* receipt/record naming collisions
* historical material presented as current chain truth
* artifact-0005 referenced incorrectly

## Contributing

A contribution to SIGILLARIUM is wrong if it:

* makes archive material look like live proof publication
* makes this repository look like the public verifier
* makes this repository look like the evidence root
* removes artifact-0005 visibility from the system story
* removes `https://verify.verifrax.net/` from the verification adjacency
* invents package publication claims
* weakens proof/archive separation
* weakens authority/execution/archive reading direction

## License

Apache License Version 2.0. See `LICENSE`.
