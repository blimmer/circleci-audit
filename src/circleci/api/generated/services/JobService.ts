/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class JobService {

    /**
     * Get job details
     * Returns job details.
     * @param jobNumber The number of the job.
     * @param projectSlug Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped.
     * @returns any Job details.
     * @throws ApiError
     */
    public static getJobDetails(
        jobNumber: any,
        projectSlug: string,
    ): CancelablePromise<{
        /**
         * URL of the job in CircleCI Web UI.
         */
        web_url: string;
        /**
         * Information about a project.
         */
        project: {
            id: string;
            /**
             * Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped.
             */
            slug: string;
            /**
             * The name of the project
             */
            name: string;
            /**
             * URL to the repository hosting the project's code
             */
            external_url: string;
        };
        /**
         * Info about parallels runs and their status.
         */
        parallel_runs: Array<{
            /**
             * Index of the parallel run.
             */
            index: number;
            /**
             * Status of the parallel run.
             */
            status: string;
        }>;
        /**
         * The date and time the job started.
         */
        started_at: string;
        /**
         * Info about the latest workflow the job was a part of.
         */
        latest_workflow: {
            /**
             * The unique ID of the workflow.
             */
            id: string;
            /**
             * The name of the workflow.
             */
            name: string;
        };
        /**
         * The name of the job.
         */
        name: string;
        /**
         * Information about executor used for a job.
         */
        executor: {
            /**
             * Resource class name.
             */
            resource_class: string;
            /**
             * Executor type.
             */
            type?: string;
        };
        /**
         * A number of parallel runs the job has.
         */
        parallelism: number;
        /**
         * The current status of the job.
         */
        status: 'success' | 'running' | 'not_run' | 'failed' | 'retried' | 'queued' | 'not_running' | 'infrastructure_fail' | 'timedout' | 'on_hold' | 'terminated-unknown' | 'blocked' | 'canceled' | 'unauthorized';
        /**
         * The number of the job.
         */
        number: number;
        /**
         * Info about a pipeline the job is a part of.
         */
        pipeline: {
            /**
             * The unique ID of the pipeline.
             */
            id: string;
        };
        /**
         * Duration of a job in milliseconds.
         */
        duration: number;
        /**
         * The time when the job was created.
         */
        created_at: string;
        /**
         * Messages from CircleCI execution platform.
         */
        messages: Array<{
            /**
             * Message type.
             */
            type: string;
            /**
             * Information describing message.
             */
            message: string;
            /**
             * Value describing the reason for message to be added to the job.
             */
            reason?: string;
        }>;
        /**
         * List of contexts used by the job.
         */
        contexts: Array<{
            /**
             * The name of the context.
             */
            name: string;
        }>;
        /**
         * Information about an organization.
         */
        organization: {
            /**
             * The name of the organization.
             */
            name: string;
        };
        /**
         * The time when the job was placed in a queue.
         */
        queued_at: string;
        /**
         * The time when the job stopped.
         */
        stopped_at?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/project/{project-slug}/job/{job-number}',
            path: {
                'job-number': jobNumber,
                'project-slug': projectSlug,
            },
        });
    }

    /**
     * Cancel job
     * Cancel job with a given job number.
     * @param jobNumber The number of the job.
     * @param projectSlug Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped.
     * @returns any
     * @throws ApiError
     */
    public static cancelJob(
        jobNumber: any,
        projectSlug: string,
    ): CancelablePromise<{
        /**
         * A human-readable message
         */
        message: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/project/{project-slug}/job/{job-number}/cancel',
            path: {
                'job-number': jobNumber,
                'project-slug': projectSlug,
            },
        });
    }

    /**
     * Get a job's artifacts
     * Returns a job's artifacts.
     * @param jobNumber The number of the job.
     * @param projectSlug Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped.
     * @returns any A paginated list of the job's artifacts.
     * @throws ApiError
     */
    public static getJobArtifacts(
        jobNumber: any,
        projectSlug: string,
    ): CancelablePromise<{
        items: Array<{
            /**
             * The artifact path.
             */
            path: string;
            /**
             * The index of the node that stored the artifact.
             */
            node_index: number;
            /**
             * The URL to download the artifact contents.
             */
            url: string;
        }>;
        /**
         * A token to pass as a `page-token` query parameter to return the next page of results.
         */
        next_page_token: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/project/{project-slug}/{job-number}/artifacts',
            path: {
                'job-number': jobNumber,
                'project-slug': projectSlug,
            },
        });
    }

    /**
     * Get test metadata
     * Get test metadata for a build. In the rare case where there is more than 250MB of test data on the job, no results will be returned.
     * @param jobNumber The number of the job.
     * @param projectSlug Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped.
     * @returns any A paginated list of test results.
     * @throws ApiError
     */
    public static getTests(
        jobNumber: any,
        projectSlug: string,
    ): CancelablePromise<{
        items: Array<{
            /**
             * The failure message associated with the test.
             */
            message: string;
            /**
             * The program that generated the test results
             */
            source: string;
            /**
             * The time it took to run the test in seconds
             */
            run_time: number;
            /**
             * The file in which the test is defined.
             */
            file: string;
            /**
             * Indication of whether the test succeeded.
             */
            result: string;
            /**
             * The name of the test.
             */
            name: string;
            /**
             * The programmatic location of the test.
             */
            classname: string;
        }>;
        /**
         * A token to pass as a `page-token` query parameter to return the next page of results.
         */
        next_page_token: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/project/{project-slug}/{job-number}/tests',
            path: {
                'job-number': jobNumber,
                'project-slug': projectSlug,
            },
        });
    }

}
